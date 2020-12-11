import { useHistory } from "react-router-dom";
import { AuthStatus } from "../people/common/constant";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function useBlockLoginUser() {
  const history = useHistory();
  const status  = useSelector(state => state.auth.status)
  useEffect(() => {
    if(status === AuthStatus.Login){
      history.replace('/findClient')
    }
  }, [status, history])
}