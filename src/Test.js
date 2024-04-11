import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUserName } from "./redux/actions/user";

function Test() {
  const username = useSelector((store) => store.user.personalDetails.name);
  const address = useSelector((store) => store.user.address);

  const [name, setName] = useState(username);

  const dispatch = useDispatch();

  const onChange = (e) => {
    setName(e.target.value);
  };

  const handleOnUpdate = () => {
    dispatch(setUserName(name));

    // dispatch({
    //   type: "USER_NAME",
    //   payload: name,
    // });
  };

  return (
    <div>
      Address:
      {address}
      <h1> Username : {username}</h1>
      <input type="text" onChange={onChange} />
      <button onClick={handleOnUpdate}>Press to update</button>
    </div>
  );
}

export default Test;
