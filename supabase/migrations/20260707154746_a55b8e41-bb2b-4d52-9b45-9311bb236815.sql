
CREATE TABLE public.visitor_stats (
  id INT PRIMARY KEY DEFAULT 1,
  count BIGINT NOT NULL DEFAULT 0,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  CONSTRAINT visitor_stats_singleton CHECK (id = 1)
);

GRANT SELECT ON public.visitor_stats TO anon, authenticated;
GRANT ALL ON public.visitor_stats TO service_role;

ALTER TABLE public.visitor_stats ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read visitor stats"
  ON public.visitor_stats FOR SELECT
  TO anon, authenticated
  USING (true);

INSERT INTO public.visitor_stats (id, count) VALUES (1, 0);

CREATE OR REPLACE FUNCTION public.increment_visitor()
RETURNS BIGINT
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  new_count BIGINT;
BEGIN
  UPDATE public.visitor_stats
     SET count = count + 1,
         updated_at = now()
   WHERE id = 1
  RETURNING count INTO new_count;
  RETURN new_count;
END;
$$;

GRANT EXECUTE ON FUNCTION public.increment_visitor() TO anon, authenticated;

ALTER PUBLICATION supabase_realtime ADD TABLE public.visitor_stats;
ALTER TABLE public.visitor_stats REPLICA IDENTITY FULL;
