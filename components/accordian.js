import { useContext } from "react";
import {
  Accordion,
  AccordionContext,
  Card,
  useAccordionButton,
} from "react-bootstrap";
import FAQitem from "../data/faq.json";

function ContextAwareToggle({ eventKey, callback }) {
  const { activeEventKey } = useContext(AccordionContext);
  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey)
  );
  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <div>
      <button
        type="button"
        className="btn-accordian"
        onClick={decoratedOnClick}
      >
        <i className={isCurrentEventKey ? "ti ti-minus text-accent" : "ti ti-plus text-accent"}></i>
      </button>
    </div>
  );
}

export default function Accordian() {
  return (
    <>
      <Accordion defaultActiveKey="0" className="mb-5">
        {FAQitem.faqItem.map((item, index) => (
          <Card className="border-0 mb-3">
            <Card.Header className="d-flex justify-content-between bg-transparent border-0 rounded-0">
              <h5> {item.title} </h5>
              <ContextAwareToggle key={index} eventKey={index}>
                {item.title}
              </ContextAwareToggle>
            </Card.Header>
            <Accordion.Collapse eventKey={index}>
              <Card.Body><p> {item.content} </p></Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion>
    </>
  );
}
