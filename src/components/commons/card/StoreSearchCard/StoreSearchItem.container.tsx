import { useRouter } from "next/router";
import { MouseEvent } from "react";
import StoreSearchItemPresenterPage from "./StoreSearchItem.presenter";

export default function StoreSearchItemContainerPage(props) {
  console.log("프프프롭스", props);
  const router = useRouter();

  // const onClickDetailPage = (event: MouseEvent<HTMLDivElement>) => {
  //   if (event.target instanceof Element) {
  //     router.push(`/reviews/commonReview/${event.currentTarget.id}`);
  //   }
  // };

  return <StoreSearchItemPresenterPage id={props.id} el={props.el} />;
}
