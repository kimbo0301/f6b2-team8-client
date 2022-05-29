import { useRouter } from "next/router";
import WriteBtnPresenterPage from "./WriteBtn.presenter";

export default function WriteBtnContainerPage(props) {
  const router = useRouter();
  console.log(props);

  const onClickWrite = () => {
    router.push({
      pathname: "/reviews/commonReview/write",
      query: { checkPage: props.checkPage },
    });
  };
  return (
    <WriteBtnPresenterPage
      onClickWrite={onClickWrite}
      checkPage={props.checkPage}
    />
  );
}
