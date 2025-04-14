import MyButton from "@/components/btn";
import MarkManage from "@/components/MarkManage";

export default function Home() {
  console.log("push==test")
  return (
    <>
      <section className="m-20">
        <MyButton />

        <MarkManage />
      </section>
    </>
  );
}
