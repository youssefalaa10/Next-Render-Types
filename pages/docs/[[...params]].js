import { useRouter } from "next/router";
import React from "react";

export default function params() {
  const { params = [] } = useRouter().query;
  if (params.length === 0) return <div>no params</div>;
  else if (params.length === 1) {
    return <h1>Params: {params[0]}</h1>;
  } else if (params.length === 2) {
    return (
      <h1>
        Params: {params[0]} & {params[1]}
      </h1>
    );
  } else if (params.length === 3) {
    return (
      <h1>
        Params: {params[0]} & {params[1]}& {params[2]}
      </h1>
    );
  } else {
    return <div>params------</div>;
  }
}
