// 10개의 샘플 데이터
const contentData = [
  {
    id: 0,
    keyword: "맛집",
    video_src: "/assets/videos/sample2.mp4",
    views: 15622231,
    likes: 402,
    author: "changheeee",
    rank_point: 2424,
    title: "맛집 방문했습니다!",
    description:
      "소문난 맛집에 방문했습니다 정말 추천합니다 꼭 와보세요 안오시면 후회합니다~~~<br/>소문대로 역시 맛이 훌륭하네요~<br/>부산에 오면 꼭 방문해보세요!",
  },
  {
    id: 1,
    keyword: "맛집",
    video_src: "/assets/videos/sample2.mp4",

    views: 8923451,
    likes: 821,
    author: "travel_master",
    rank_point: 3001,
    title: "여행의 즐거움",
    description:
      "여행을 통해 새로운 세상을 경험하고 다양한 문화를 체험해보세요. 잊지 못할 추억을 만들 수 있습니다.",
  },
  {
    id: 2,
    keyword: "맛집",
    video_src: "/assets/videos/sample2.mp4",

    views: 7521234,
    likes: 921,
    author: "cinema_fan",
    rank_point: 2832,
    title: "최신 영화 리뷰",
    description:
      "최근 개봉한 영화를 보고 리뷰를 작성했습니다. 스토리와 연출, 배우들의 연기가 인상적이었습니다.",
  },
  {
    id: 3,
    keyword: "운동",
    video_src: "/assets/videos/sample2.mp4",

    views: 5631123,
    likes: 678,
    author: "fitlife",
    rank_point: 2156,
    title: "운동의 중요성",
    description:
      "운동을 통해 건강을 유지하고 체력을 길러보세요. 규칙적인 운동은 삶의 질을 향상시킵니다.",
  },
  {
    id: 4,
    keyword: "맛집",
    video_src: "/assets/videos/sample2.mp4",

    views: 4721234,
    likes: 1023,
    author: "musiclover",
    rank_point: 2801,
    title: "최신 음악 추천",
    description:
      "최근에 발매된 음악 앨범을 추천합니다. 다양한 장르의 음악을 즐겨보세요.",
  },
  {
    id: 5,
    keyword: "게임",
    video_src: "/assets/videos/sample2.mp4",

    views: 9112341,
    likes: 1543,
    author: "gamerpro",
    rank_point: 3502,
    title: "인기 게임 리뷰",
    description:
      "최근 인기 있는 게임을 플레이해보고 리뷰를 작성했습니다. 게임의 그래픽과 스토리가 훌륭합니다.",
  },
  {
    id: 6,
    keyword: "맛집",
    video_src: "/assets/videos/sample2.mp4",

    views: 6783241,
    likes: 784,
    author: "cookingstar",
    rank_point: 2785,
    title: "간단한 요리 레시피",
    description:
      "집에서 쉽게 따라할 수 있는 요리 레시피를 소개합니다. 맛있는 음식을 직접 만들어보세요.",
  },
  {
    id: 7,
    keyword: "IT",
    video_src: "/assets/videos/sample2.mp4",

    views: 6123412,
    likes: 564,
    author: "techguru",
    rank_point: 2201,
    title: "최신 IT 기술 동향",
    description:
      "최근 IT 업계의 동향과 새로운 기술에 대해 알아보세요. 앞으로의 발전 방향을 예측해봅니다.",
  },
  {
    id: 8,
    keyword: "패션",
    video_src: "/assets/videos/sample2.mp4",

    views: 7921321,
    likes: 994,
    author: "fashionista",
    rank_point: 3056,
    title: "2024년 패션 트렌드",
    description:
      "올해의 패션 트렌드를 소개합니다. 최신 유행 스타일을 확인하고 패션 감각을 높여보세요.",
  },
  {
    id: 9,
    keyword: "맛집",
    video_src: "/assets/videos/sample2.mp4",

    views: 5123411,
    likes: 675,
    author: "artistico",
    rank_point: 2678,
    title: "현대 예술의 흐름",
    description:
      "현대 예술의 흐름과 주요 작가들을 소개합니다. 예술 작품을 감상하고 분석해보세요.",
  },
  {
    id: 10,
    keyword: "책",
    video_src: "/assets/videos/sample2.mp4",

    views: 4012341,
    likes: 543,
    author: "bookworm",
    rank_point: 1923,
    title: "최신 베스트셀러 리뷰",
    description:
      "최근 베스트셀러 도서를 읽고 리뷰를 작성했습니다. 흥미로운 줄거리와 유익한 내용을 소개합니다.",
  },
  {
    id: 11,
    keyword: "사진",
    video_src: "/assets/videos/sample2.mp4",

    views: 3781234,
    likes: 432,
    author: "shutterbug",
    rank_point: 1812,
    title: "사진 촬영 기법",
    description:
      "사진 촬영의 기본 기법과 팁을 소개합니다. 멋진 사진을 찍기 위한 방법을 배워보세요.",
  },
  {
    id: 12,
    keyword: "디자인",
    video_src: "/assets/videos/sample2.mp4",

    views: 3612341,
    likes: 654,
    author: "design_master",
    rank_point: 2012,
    title: "최신 디자인 트렌드",
    description:
      "최근 디자인 트렌드와 인기 있는 디자인 요소를 소개합니다. 디자인 감각을 키워보세요.",
  },
  {
    id: 13,
    keyword: "뷰티",
    video_src: "/assets/videos/sample2.mp4",

    views: 4512341,
    likes: 743,
    author: "beautyguru",
    rank_point: 2301,
    title: "뷰티 제품 추천",
    description:
      "인기 있는 뷰티 제품을 소개하고 사용 후기를 공유합니다. 피부 관리와 메이크업 팁을 확인해보세요.",
  },
  {
    id: 14,
    keyword: "자동차",
    video_src: "/assets/videos/sample2.mp4",

    views: 5123451,
    likes: 832,
    author: "carlovers",
    rank_point: 2543,
    title: "최신 자동차 리뷰",
    description:
      "최근 출시된 자동차 모델을 리뷰합니다. 성능과 디자인, 가격 등을 비교해보세요.",
  },
  {
    id: 15,
    keyword: "자전거",
    video_src: "/assets/videos/sample2.mp4",

    views: 2923451,
    likes: 321,
    author: "bikelover",
    rank_point: 1723,
    title: "자전거 타기 좋은 코스",
    description:
      "자전거를 타기 좋은 코스를 소개합니다. 아름다운 풍경과 함께 자전거 타는 즐거움을 경험해보세요.",
  },
  {
    id: 16,
    keyword: "사진",
    video_src: "/assets/videos/sample2.mp4",

    views: 3781234,
    likes: 432,
    author: "shutterbug",
    rank_point: 1812,
    title: "사진 촬영 기법",
    description:
      "사진 촬영의 기본 기법과 팁을 소개합니다. 멋진 사진을 찍기 위한 방법을 배워보세요.",
  },
  {
    id: 17,
    keyword: "디자인",
    video_src: "/assets/videos/sample2.mp4",

    views: 3612341,
    likes: 654,
    author: "design_master",
    rank_point: 2012,
    title: "최신 디자인 트렌드",
    description:
      "최근 디자인 트렌드와 인기 있는 디자인 요소를 소개합니다. 디자인 감각을 키워보세요.",
  },
  {
    id: 18,
    keyword: "뷰티",
    video_src: "/assets/videos/sample2.mp4",

    views: 4512341,
    likes: 743,
    author: "beautyguru",
    rank_point: 2301,
    title: "뷰티 제품 추천",
    description:
      "인기 있는 뷰티 제품을 소개하고 사용 후기를 공유합니다. 피부 관리와 메이크업 팁을 확인해보세요.",
  },
  {
    id: 19,
    keyword: "자동차",
    video_src: "/assets/videos/sample2.mp4",

    views: 5123451,
    likes: 832,
    author: "carlovers",
    rank_point: 2543,
    title: "최신 자동차 리뷰",
    description:
      "최근 출시된 자동차 모델을 리뷰합니다. 성능과 디자인, 가격 등을 비교해보세요.",
  },
  {
    id: 20,
    keyword: "자전거",
    video_src: "/assets/videos/sample2.mp4",

    views: 2923451,
    likes: 321,
    author: "bikelover",
    rank_point: 1723,
    title: "자전거 타기 좋은 코스",
    description:
      "자전거를 타기 좋은 코스를 소개합니다. 아름다운 풍경과 함께 자전거 타는 즐거움을 경험해보세요.",
  },
  {
    id: 21,
    keyword: "건강",
    video_src: "/assets/videos/sample2.mp4",

    views: 6312341,
    likes: 832,
    author: "healthguru",
    rank_point: 2781,
    title: "건강 관리 팁",
    description:
      "건강을 유지하기 위한 다양한 팁을 소개합니다. 운동, 영양, 수면 관리 등을 포함합니다.",
  },
  {
    id: 22,
    keyword: "취미",
    video_src: "/assets/videos/sample2.mp4",

    views: 4212341,
    likes: 421,
    author: "hobbyist",
    rank_point: 1981,
    title: "취미 생활의 즐거움",
    description:
      "다양한 취미 생활을 즐기는 방법을 소개합니다. 여가 시간을 활용하여 삶의 질을 높여보세요.",
  },
  {
    id: 23,
    keyword: "캠핑",
    video_src: "/assets/videos/sample2.mp4",

    views: 5312341,
    likes: 943,
    author: "camper",
    rank_point: 2681,
    title: "캠핑 장비 추천",
    description:
      "캠핑을 즐기기 위한 필수 장비를 추천합니다. 편안하고 즐거운 캠핑을 위한 팁을 제공합니다.",
  },
  {
    id: 24,
    keyword: "요가",
    video_src: "/assets/videos/sample2.mp4",

    views: 3921234,
    likes: 512,
    author: "yogamaster",
    rank_point: 2121,
    title: "요가의 이점",
    description:
      "요가를 통해 신체와 마음의 건강을 유지하세요. 다양한 요가 자세와 그 이점을 소개합니다.",
  },
  {
    id: 25,
    keyword: "공예",
    video_src: "/assets/videos/sample2.mp4",

    views: 3212341,
    likes: 321,
    author: "craftlover",
    rank_point: 1821,
    title: "DIY 공예 프로젝트",
    description:
      "간단한 재료로 할 수 있는 DIY 공예 프로젝트를 소개합니다. 창의력을 발휘해보세요.",
  },
  {
    id: 26,
    keyword: "비즈니스",
    video_src: "/assets/videos/sample2.mp4",

    views: 7212341,
    likes: 1123,
    author: "businessguru",
    rank_point: 2881,
    title: "비즈니스 성공 전략",
    description:
      "비즈니스를 성공으로 이끄는 전략과 팁을 공유합니다. 효과적인 경영 방법을 배워보세요.",
  },
  {
    id: 27,
    keyword: "부동산",
    video_src: "/assets/videos/sample2.mp4",

    views: 6123451,
    likes: 723,
    author: "realestatepro",
    rank_point: 2501,
    title: "부동산 투자 가이드",
    description:
      "부동산 투자의 기본 개념과 성공적인 투자 전략을 소개합니다. 부동산 시장의 동향을 파악하세요.",
  },
  {
    id: 28,
    keyword: "주식",
    video_src: "/assets/videos/sample2.mp4",

    views: 5312341,
    likes: 832,
    author: "stocktrader",
    rank_point: 2381,
    title: "주식 투자 팁",
    description:
      "주식 투자의 기본 원리와 성공적인 투자 방법을 소개합니다. 주식 시장을 이해하고 분석하세요.",
  },
  {
    id: 29,
    keyword: "기술",
    video_src: "/assets/videos/sample2.mp4",

    views: 4912341,
    likes: 654,
    author: "techenthusiast",
    rank_point: 2191,
    title: "최신 기술 뉴스",
    description:
      "최신 기술 뉴스와 혁신적인 기술 발전을 소개합니다. 기술의 미래를 예측해보세요.",
  },
  {
    id: 30,
    keyword: "교육",
    video_src: "/assets/videos/sample2.mp4",

    views: 4712341,
    likes: 543,
    author: "educator",
    rank_point: 1981,
    title: "효과적인 학습 방법",
    description:
      "효과적인 학습 방법과 공부 팁을 공유합니다. 학습 능력을 향상시키는 방법을 알아보세요.",
  },
  {
    id: 31,
    keyword: "자연",
    video_src: "/assets/videos/sample2.mp4",

    views: 4312341,
    likes: 432,
    author: "naturelover",
    rank_point: 1761,
    title: "자연 탐험",
    description:
      "자연을 탐험하고 아름다운 풍경을 감상해보세요. 자연 속에서 힐링할 수 있는 방법을 소개합니다.",
  },
  {
    id: 32,
    keyword: "사진",
    video_src: "/assets/videos/sample2.mp4",

    views: 3781234,
    likes: 432,
    author: "shutterbug",
    rank_point: 1812,
    title: "사진 촬영 기법",
    description:
      "사진 촬영의 기본 기법과 팁을 소개합니다. 멋진 사진을 찍기 위한 방법을 배워보세요.",
  },
  {
    id: 33,
    keyword: "디자인",
    video_src: "/assets/videos/sample2.mp4",

    views: 3612341,
    likes: 654,
    author: "design_master",
    rank_point: 2012,
    title: "최신 디자인 트렌드",
    description:
      "최근 디자인 트렌드와 인기 있는 디자인 요소를 소개합니다. 디자인 감각을 키워보세요.",
  },
  {
    id: 34,
    keyword: "뷰티",
    video_src: "/assets/videos/sample2.mp4",

    views: 4512341,
    likes: 743,
    author: "beautyguru",
    rank_point: 2301,
    title: "뷰티 제품 추천",
    description:
      "인기 있는 뷰티 제품을 소개하고 사용 후기를 공유합니다. 피부 관리와 메이크업 팁을 확인해보세요.",
  },
  {
    id: 35,
    keyword: "자동차",
    video_src: "/assets/videos/sample2.mp4",

    views: 5123451,
    likes: 832,
    author: "carlovers",
    rank_point: 2543,
    title: "최신 자동차 리뷰",
    description:
      "최근 출시된 자동차 모델을 리뷰합니다. 성능과 디자인, 가격 등을 비교해보세요.",
  },
  {
    id: 36,
    keyword: "자전거",
    video_src: "/assets/videos/sample2.mp4",

    views: 2923451,
    likes: 321,
    author: "bikelover",
    rank_point: 1723,
    title: "자전거 타기 좋은 코스",
    description:
      "자전거를 타기 좋은 코스를 소개합니다. 아름다운 풍경과 함께 자전거 타는 즐거움을 경험해보세요.",
  },
  {
    id: 37,
    keyword: "건강",
    video_src: "/assets/videos/sample2.mp4",

    views: 6312341,
    likes: 832,
    author: "healthguru",
    rank_point: 2781,
    title: "건강 관리 팁",
    description:
      "건강을 유지하기 위한 다양한 팁을 소개합니다. 운동, 영양, 수면 관리 등을 포함합니다.",
  },
  {
    id: 38,
    keyword: "취미",
    video_src: "/assets/videos/sample2.mp4",

    views: 4212341,
    likes: 421,
    author: "hobbyist",
    rank_point: 1981,
    title: "취미 생활의 즐거움",
    description:
      "다양한 취미 생활을 즐기는 방법을 소개합니다. 여가 시간을 활용하여 삶의 질을 높여보세요.",
  },
  {
    id: 39,
    keyword: "캠핑",
    video_src: "/assets/videos/sample2.mp4",

    views: 5312341,
    likes: 943,
    author: "camper",
    rank_point: 2681,
    title: "캠핑 장비 추천",
    description:
      "캠핑을 즐기기 위한 필수 장비를 추천합니다. 편안하고 즐거운 캠핑을 위한 팁을 제공합니다.",
  },
  {
    id: 40,
    keyword: "요가",
    video_src: "/assets/videos/sample2.mp4",

    views: 3921234,
    likes: 512,
    author: "yogamaster",
    rank_point: 2121,
    title: "요가의 이점",
    description:
      "요가를 통해 신체와 마음의 건강을 유지하세요. 다양한 요가 자세와 그 이점을 소개합니다.",
  },
];

const rankData = {
  keywords: ["맛집", "여행", "영화", "운동", "음악"],
  creators: [
    "changheeee",
    "travel_master",
    "cinema_fan",
    "fitlife",
    "musiclover",
  ],
};

export { contentData, rankData };
