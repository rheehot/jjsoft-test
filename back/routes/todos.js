const express = require('express');

const router = express.Router();

router.get('/', async (req, res, next) => {
    res.status(200).json([
        {
            id: 0,
            completed: false,
            title: '녹차 사기',
            content: '개인적으로 좋아하는 녹차사기',
            createAt: 1560577682
        },
        {
            id: 1,
            completed: false,
            title: '바퀴벌레약 설치해놓기',
            content: '여름이 다가왔으니 필수!',
            createAt: 1560577682
        },
        {
            id: 2,
            completed: false,
            title: '닭가슴살 사기',
            content: '이번 일주일 동안 먹을 고기를 사자!',
            createAt: 1560577728
        },
        {
            id: 3,
            completed: false,
            title: '수박 사자',
            content: '여름이 다가왔으니 필수!',
            createAt: 1560577682
        },
        {
            id: 4,
            completed: false,
            title: '선물 사기',
            content: '선물 사자',
            createAt: 1560577682
        },
        {
            id: 5,
            completed: false,
            title: '우산 챙기기',
            content: '요즘은 스콜같이 비가오니 우산을 챙겨야한다',
            createAt: 1560577682
        },
        {
            id: 6,
            completed: false,
            title: '마트 들리기',
            content: '생필품을 사러 가야한다!',
            createAt: 1560577682
        },
        {
            id: 7,
            completed: false,
            title: '청소용품 사기',
            content: '곰팡이 핀 기존 청소용품을 버리고 사자',
            createAt: 1560577682
        },
        {
            id: 8,
            completed: false,
            title: '형광등 교체하기',
            content: '기존에 사용하는 형광등이 꺼져버려서 교체가 필요하다',
            createAt: 1560577682
        },
        {
            id: 9,
            completed: false,
            title: '전구 교체하기',
            content: '기존에 사용하는 전구가 꺼져버려서 교체가 필요하다',
            createAt: 1560577682
        },
        {
            id: 10,
            completed: false,
            title: 'AA배터리 사기',
            content: 'AA배터리가 필요하다',
            createAt: 1560577682
        },
        {
            id: 11,
            completed: false,
            title: '참외 사기',
            content: '여름이 다가왔으니 필수!',
            createAt: 1560577682
        },
        {
            id: 12,
            completed: false,
            title: 'JLPT 시험접수',
            content: '이번에는 붙을 수 있을거야!',
            createAt: 1560577728
        },
        {
            id: 13,
            completed: false,
            title: '증명 사진 찍기',
            content: '서류 제출에 필요하니 찍어야한다.',
            createAt: 1560577682
        },
        {
            id: 14,
            completed: false,
            title: '가계부 작성하기',
            content: '매일 매일 작성해서 건강한 소비 생활을 해보자!',
            createAt: 1560577682
        },
        {
            id: 15,
            completed: false,
            title: '대출 상담해보기',
            content: '은행은 나의 친구!',
            createAt: 1560577682
        },
        {
            id: 16,
            completed: false,
            title: '맥북 챙겨가기',
            content: '행사 참여로 필요',
            createAt: 1560577682
        },
        {
            id: 17,
            completed: false,
            title: 'Spotify 사용해보기',
            content: '한국 출시는 언젠가 하겠지..',
            createAt: 1560577682
        },
        {
            id: 18,
            completed: false,
            title: '넷플릭스 가입해서 사용해보기',
            content: '한 번 빠지면 헤어나올 수 없다는 넷플릭스!',
            createAt: 1560577682
        },
        {
            id: 19,
            completed: false,
            title: '치과 스케일링 하러가기',
            content: '정기적인 스케일링이 필요하다',
            createAt: 1560577682
        }
    ])
});

module.exports = router;