-- Fix the function to have a secure search path
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER 
LANGUAGE plpgsql 
SECURITY DEFINER 
SET search_path = 'public'
AS $$
BEGIN
  INSERT INTO public.credits (user_id, quantity)
  VALUES (NEW.id, 10); -- Give 10 credits to new users
  RETURN NEW;
END;
$$;