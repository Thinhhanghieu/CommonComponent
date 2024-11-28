import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/features/userSlice";

interface PageWrapperProps {
  state: any;
  children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ state, children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(setUser(state));
  }, [state, dispatch]);

  return <>{children}</>;
};


export default PageWrapper;