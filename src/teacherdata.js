
const generateRandomNumbers  = () => {
     return Math.floor(Math.random()*10) + 1
}
export const teacherData = [
     {
          "id": 1,
          "profile": "./images/pic-3.jpg",
          "proffession": "Back-end developer",
          "name": "Nfor Presly",
          "stats": {
               "likes": generateRandomNumbers(),
               "videos": generateRandomNumbers(),
          }
     },
     {
          "id": 2,
          "profile": "./images/pic-1.jpg",
          "proffession": "Back-end developer",
          "name": "Tanyinso Bright",
          "stats": {
               "likes": generateRandomNumbers(),
               "videos": generateRandomNumbers(),
          }
     },
     {
          "id": 3,
          "profile": "./images/pic-2.jpg",
          "proffession": "Front-end developer",
          "name": "Emmanuella Kah",
          "stats": {
               "likes": generateRandomNumbers(),
               "videos": generateRandomNumbers(),
          }
     },
     {
          "id": 4,
          "profile": "./images/pic-6.jpg",
          "proffession": "Front-end developer",
          "name": "Nsemi Philis",
          "stats": {
               "likes": generateRandomNumbers(),
               "videos": 8,
          }
     },
     {
          "id": 5,
          "profile": "./images/pic-7.jpg",
          "proffession": "Front-end developer",
          "name": "Sharon Anchi",
          "stats": {
               "likes": generateRandomNumbers(),
               "videos": generateRandomNumbers(),
          }
     }
]


