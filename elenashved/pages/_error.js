import { useEffect } from "react";
import Router from "next/router";

export default function Error() {
  useEffect(() => {
    Router.push("/about");
  }, []);

  return <></>;
}
