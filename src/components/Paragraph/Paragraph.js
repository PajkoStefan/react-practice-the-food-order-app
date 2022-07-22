import { useCallback, useMemo, useState } from "react";
import Button from "../../components/UI/Button/Button";
import DemoOutput from "../DemoOutput/DemoOutput";
import Card from "../UI/Card/Card";

import classes from "./Paragraph.module.css";

const Paragraph = ({ content, button }) => {
  const { title, content: paragraphContent } = content;
  const { content: btnContent } = button;
  const [showParagraph, setShowParagraph] = useState(false);

  const toggleParagrahHandler = useCallback(() => {
    setShowParagraph((prevState) => !prevState);
  }, []);

  const buttonProps = useMemo(() => {
    return {
      id: "btn-paragraph",
      className: classes.button,
      onClick: toggleParagrahHandler,
    };
  }, [toggleParagrahHandler]);

  return (
    <section className={classes.paragraph}>
      <Card>
        <h2>{title}</h2>
        <DemoOutput show={showParagraph} content={paragraphContent} />
        <Button button={buttonProps}>{btnContent}</Button>
      </Card>
    </section>
  );
};

export default Paragraph;
