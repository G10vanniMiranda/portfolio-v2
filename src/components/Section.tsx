import { HTMLAttributes } from "react";

type SectionProps = HTMLAttributes<HTMLElement> & {
  id?: string;
  containerClassName?: string;
};

export default function Section({ id, className, containerClassName, children, ...rest }: SectionProps) {
  return (
    <section id={id} className={className} {...rest}>
      <div className={"mx-auto w-full max-w-6xl px-4 " + (containerClassName ?? "")}>{children}</div>
    </section>
  );
}
