import SectionHeading from '../SectionHeading/SectionHeading';

interface SmallContentSectionProps {
  styleClass: string;
  heading: string;
  content: string;
}

export default function SmallContentSection(props: SmallContentSectionProps) {
  return (
    <div className={props.styleClass}>
      <SectionHeading
        styleClass={'small-content-section-heading'}
        heading={props.heading}
      />
      <p>{props.content}</p>
    </div>
  );
}
