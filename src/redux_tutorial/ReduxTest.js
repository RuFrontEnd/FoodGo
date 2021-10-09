import { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { Actions } from "redux/store";

function ReduxTest() {
  const dispatch = useDispatch();

  const member = useSelector((state) => state);

  useEffect(() => {
    dispatch(Actions.setMemberId(18));
  }, []);

  useEffect(() => {
    console.log("member", member);
  }, [member]);

  return <div>redux</div>;
}

export default ReduxTest;
