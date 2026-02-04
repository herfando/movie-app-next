import Detail from "@/components/container/Detail";

export default function Page({ params }: { params: { id: string } }) {
  return <Detail movieId={Number(params.id)} />;
}
