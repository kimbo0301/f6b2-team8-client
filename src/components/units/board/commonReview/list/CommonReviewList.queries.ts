// 일반리뷰 List 페이지 queries

import { gql } from "@apollo/client";

export const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      boardId
      boardTitle
      boardSugar
      boardSalt
      boardContents
      boardLikeCount
      boardHit
      createAt
    }
  }
`;