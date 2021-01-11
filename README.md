# Im-D Blog

## MockUp Design

- [draw.io](https://app.diagrams.net/#G1IFQrd6q98YUp96aJ_U_9_EnecczDaVyN)
- [메인 색상](https://colorhunt.co/palette/226680)

![color](./src/images/Color.png)

## Page

- index : 메인 페이지 
- blog : blog 페이지
- tag : tag 검색 페이지
- blog post : 블로그 Post 페이지

## Component

- AuthorCard
- Card
- Header
- NextCard
- Pagination
- Post
- PostList
- Tag
- TagList

## Data

- Avatar Image(추후 URL로 변경 예정)
- Author
- Blog Post Markdown

## Feature

- [X] Tag 검색
- [X] 블로그 포스트 내 이동
- [X] 페이스북, 깃헙 이동
- [X] 사진클릭시 깃헙 이동
- [] 댓글

## 🔒 Post Rule

- 새로운 포스트는 `data/blog/` 하위에 YYYY-MM-DD--Title의 형태의 디렉토리를 만들어 작성한다.
  - 디렉토리의 Title에는 영문만 작성한다.
  - 해당 디렉토리 안에 index.md를 만들어 글을 작성한다.
- index의 최상위에 적어야하는 내용은 아래와 같다.

  ```markdown
  title: 'test 문서입니다.'
  createdDate: '2019-03-16'
  updatedDate: '2019-03-17'
  author: Jinseong
  tags:

  - rendering
  - optimization
  - browser
  - html
  - css
  - http

  image: test.jpg
  draft: false

  ## markdown 올바르게 작성하기
  
  ```
  - 글 작성시 사용되는 resources는 모두 같은 디렉토리에 담는다.
  - title은 글 내부의 제목이며 외부에 노출되는 제목이기도 하다.
  - 게시글은 createdDate를 기준으로 정렬된다.
  - author는 `data/author.json`에 미리 입력해둔 정보를 이용한다.
  - tag는 검색에도 이용되니 최대한 자세히 적고 camelCase를 이용한다.
  - image는 thumnail과 게시글 최상위의 사진이다.
  - draft를 통해 작성하고 있는 글은 숨길 수 있다.
  - title을 적기 때문에 h1의 내용은 따로 작성하지 않는다.
  

- prettier를 적용하여 문서작성 스타일을 통일시킬 것. (vscode 플러그인)
