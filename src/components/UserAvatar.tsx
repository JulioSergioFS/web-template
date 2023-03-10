interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAvatar({ className, ...other }: Props) {
  const name = localStorage.getItem("name") || "";
  return (
    <div
      {...other}
      className={`user-avatar${className ? " " + className : ""}`}
    >
      {name[0]}
    </div>
  );
}
