import { Configuration, UnlockingCreativity } from "@data/tags";
import { useCallback, useState } from "react";
import { Button } from "reactstrap";
import ConfigurationClass from "../ConfigurationClass";

const TabHeader = ({callbackNav }: {callbackNav: (test: string, open: boolean) => void; }) => {
  const [modal, setModal] = useState(false);
  const toggle = useCallback(() => {
    setModal(!modal);
  }, [modal]);

  return (
    <div className="customizer-header">
      <i className="icon-close" onClick={() => callbackNav("", false)}></i>
      <span className="f-20 f-w-600 txt-dark">{UnlockingCreativity}</span>
      <p className="mb-0">{"Try It Real Time"} <i className="fa fa-thumbs-o-up txt-primary"></i></p>
      <Button color="primary" className="plus-popup mt-2" onClick={toggle}>{Configuration}</Button>
      <ConfigurationClass modal={modal} toggle={toggle} />
    </div>
  )
}

export default TabHeader
