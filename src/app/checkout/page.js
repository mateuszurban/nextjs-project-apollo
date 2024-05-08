import Button from "@/components/Button";
import Link from "next/link";

export default function Checkout() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
        marginTop: "4rem",
      }}
    >
      <h2>Thanks!</h2>
      <p>{`That's all I've prepared for this store concept.`}</p>
      <p>
        {`I hope you enjoyed this experience and haven't encountered any annoying
        bugs.`}
      </p>
      <p></p>
      <Link href={"/"}>
        <Button text={"Back to main page"} />
      </Link>
    </div>
  );
}
