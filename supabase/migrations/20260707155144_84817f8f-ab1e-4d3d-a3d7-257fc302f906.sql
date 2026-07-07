
CREATE OR REPLACE FUNCTION public.get_visitor_trend(_days INTEGER DEFAULT 7)
RETURNS TABLE(day DATE, visits BIGINT)
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  WITH days AS (
    SELECT (CURRENT_DATE - i)::DATE AS day
    FROM generate_series(0, GREATEST(_days, 1) - 1) AS i
  )
  SELECT d.day,
         COALESCE(COUNT(e.id), 0)::BIGINT AS visits
  FROM days d
  LEFT JOIN public.visitor_events e
    ON (e.occurred_at AT TIME ZONE 'UTC')::DATE = d.day
  GROUP BY d.day
  ORDER BY d.day ASC;
$$;

REVOKE ALL ON FUNCTION public.get_visitor_trend(INTEGER) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.get_visitor_trend(INTEGER) TO anon, authenticated;
