const envelope = [
  { x: 0, y: 0 },
  { x: 0, y: 1 },
  { x: 0, y: 2 },
  { x: 0, y: 3 },
  { x: 0, y: 4 },
  { x: 0, y: 5 },
  { x: 7, y: 0 },
  { x: 7, y: 1 },
  { x: 7, y: 2 },
  { x: 7, y: 3 },
  { x: 7, y: 4 },
  { x: 7, y: 5 },
  { x: 1, y: 0 },
  { x: 2, y: 0 },
  { x: 3, y: 0 },
  { x: 4, y: 0 },
  { x: 5, y: 0 },
  { x: 6, y: 0 },
  { x: 1, y: 5 },
  { x: 2, y: 5 },
  { x: 3, y: 5 },
  { x: 4, y: 5 },
  { x: 5, y: 5 },
  { x: 6, y: 5 },
  { x: 1, y: 1 },
  { x: 2, y: 2 },
  { x: 3, y: 3 },
  { x: 4, y: 3 },
  { x: 5, y: 2 },
  { x: 6, y: 1 },
];

const logo = [
  { x: 28, y: 31 },
  { x: 29, y: 24 },
  { x: 29, y: 23 },
  { x: 29, y: 30 },
  { x: 30, y: 29 },
  { x: 29, y: 28 },
  { x: 29, y: 27 },
  { x: 29, y: 26 },
  { x: 29, y: 25 },
  { x: 30, y: 27 },
  { x: 30, y: 26 },
  { x: 30, y: 25 },
  { x: 26, y: 31 },
  { x: 26, y: 30 },
  { x: 26, y: 29 },
  { x: 26, y: 28 },
  { x: 26, y: 27 },
  { x: 26, y: 26 },
  { x: 26, y: 25 },
  { x: 27, y: 30 },
  { x: 27, y: 29 },
  { x: 27, y: 28 },
  { x: 27, y: 27 },
  { x: 27, y: 26 },
  { x: 27, y: 25 },
  { x: 27, y: 24 },
  { x: 28, y: 29 },
  { x: 28, y: 28 },
  { x: 28, y: 27 },
  { x: 28, y: 25 },
  { x: 28, y: 26 },
  { x: 28, y: 24 },
  { x: 34, y: 24 },
  { x: 35, y: 24 },
  { x: 35, y: 23 },
  { x: 36, y: 23 },
  { x: 31, y: 24 },
  { x: 32, y: 24 },
  { x: 36, y: 24 },
  { x: 32, y: 23 },
  { x: 30, y: 24 },
  { x: 30, y: 23 },
  { x: 31, y: 23 },
  { x: 33, y: 24 },
  { x: 33, y: 23 },
  { x: 34, y: 23 },
  { x: 38, y: 15 },
  { x: 39, y: 15 },
  { x: 39, y: 14 },
  { x: 40, y: 14 },
  { x: 40, y: 15 },
  { x: 38, y: 14 },
  { x: 35, y: 17 },
  { x: 36, y: 17 },
  { x: 36, y: 16 },
  { x: 37, y: 16 },
  { x: 37, y: 17 },
  { x: 35, y: 16 },
  { x: 36, y: 20 },
  { x: 37, y: 20 },
  { x: 35, y: 20 },
  { x: 37, y: 18 },
  { x: 38, y: 18 },
  { x: 36, y: 18 },
  { x: 36, y: 15 },
  { x: 37, y: 15 },
  { x: 35, y: 15 },
  { x: 39, y: 13 },
  { x: 40, y: 13 },
  { x: 38, y: 13 },
  { x: 39, y: 12 },
  { x: 40, y: 12 },
  { x: 38, y: 12 },
  { x: 40, y: 11 },
  { x: 41, y: 11 },
  { x: 39, y: 11 },
  { x: 37, y: 11 },
  { x: 38, y: 11 },
  { x: 36, y: 11 },
  { x: 37, y: 10 },
  { x: 38, y: 10 },
  { x: 36, y: 10 },
  { x: 34, y: 10 },
  { x: 35, y: 10 },
  { x: 41, y: 13 },
  { x: 41, y: 15 },
  { x: 40, y: 16 },
  { x: 41, y: 17 },
  { x: 40, y: 18 },
  { x: 39, y: 17 },
  { x: 38, y: 16 },
  { x: 42, y: 14 },
  { x: 43, y: 14 },
  { x: 43, y: 13 },
  { x: 43, y: 12 },
  { x: 42, y: 12 },
  { x: 40, y: 10 },
  { x: 41, y: 9 },
  { x: 39, y: 9 },
  { x: 40, y: 8 },
  { x: 36, y: 9 },
  { x: 38, y: 8 },
  { x: 34, y: 8 },
  { x: 35, y: 8 },
  { x: 37, y: 8 },
  { x: 37, y: 7 },
  { x: 37, y: 6 },
  { x: 36, y: 6 },
  { x: 35, y: 7 },
  { x: 35, y: 6 },
  { x: 33, y: 9 },
  { x: 31, y: 9 },
  { x: 31, y: 11 },
  { x: 32, y: 13 },
  { x: 33, y: 17 },
  { x: 32, y: 16 },
  { x: 32, y: 18 },
  { x: 34, y: 18 },
  { x: 31, y: 17 },
  { x: 35, y: 19 },
  { x: 37, y: 19 },
  { x: 34, y: 17 },
  { x: 31, y: 15 },
  { x: 34, y: 16 },
  { x: 34, y: 15 },
  { x: 33, y: 15 },
  { x: 31, y: 14 },
  { x: 30, y: 14 },
  { x: 31, y: 12 },
  { x: 30, y: 12 },
  { x: 29, y: 14 },
  { x: 29, y: 13 },
  { x: 29, y: 12 },
  { x: 35, y: 11 },
  { x: 32, y: 10 },
  { x: 32, y: 8 },
  { x: 28, y: 23 },
  { x: 25, y: 30 },
  { x: 24, y: 29 },
  { x: 24, y: 28 },
  { x: 24, y: 27 },
  { x: 25, y: 29 },
  { x: 25, y: 28 },
  { x: 25, y: 27 },
  { x: 25, y: 26 },
  { x: 35, y: 26 },
  { x: 36, y: 26 },
  { x: 32, y: 26 },
  { x: 33, y: 26 },
  { x: 34, y: 26 },
  { x: 31, y: 26 },
  { x: 35, y: 28 },
  { x: 36, y: 28 },
  { x: 37, y: 28 },
  { x: 38, y: 28 },
  { x: 37, y: 26 },
  { x: 38, y: 26 },
  { x: 39, y: 27 },
  { x: 40, y: 27 },
  { x: 41, y: 26 },
  { x: 42, y: 26 },
  { x: 43, y: 25 },
  { x: 44, y: 25 },
  { x: 41, y: 24 },
  { x: 42, y: 24 },
  { x: 41, y: 23 },
  { x: 42, y: 23 },
  { x: 45, y: 24 },
  { x: 46, y: 24 },
  { x: 43, y: 23 },
  { x: 44, y: 23 },
  { x: 43, y: 22 },
  { x: 44, y: 22 },
  { x: 45, y: 22 },
  { x: 46, y: 22 },
  { x: 47, y: 22 },
  { x: 47, y: 23 },
  { x: 45, y: 21 },
  { x: 46, y: 21 },
  { x: 40, y: 24 },
  { x: 37, y: 25 },
  { x: 38, y: 25 },
  { x: 39, y: 25 },
  { x: 40, y: 25 },
  { x: 38, y: 24 },
  { x: 39, y: 24 },
  { x: 32, y: 28 },
  { x: 33, y: 28 },
  { x: 34, y: 28 },
  { x: 31, y: 28 },
  { x: 34, y: 11 },
  { x: 33, y: 11 },
  { x: 34, y: 12 },
  { x: 33, y: 12 },
  { x: 34, y: 13 },
  { x: 33, y: 13 },
  { x: 34, y: 14 },
  { x: 33, y: 14 },
  { x: 26, y: 35 },
  { x: 27, y: 35 },
  { x: 28, y: 35 },
  { x: 29, y: 35 },
  { x: 30, y: 35 },
  { x: 31, y: 35 },
  { x: 32, y: 35 },
  { x: 26, y: 36 },
  { x: 27, y: 36 },
  { x: 28, y: 36 },
  { x: 29, y: 36 },
  { x: 30, y: 36 },
  { x: 31, y: 36 },
  { x: 32, y: 36 },
  { x: 26, y: 37 },
  { x: 27, y: 37 },
  { x: 28, y: 37 },
  { x: 29, y: 37 },
  { x: 30, y: 37 },
  { x: 31, y: 37 },
  { x: 32, y: 37 },
  { x: 26, y: 38 },
  { x: 27, y: 38 },
  { x: 28, y: 38 },
  { x: 29, y: 38 },
  { x: 30, y: 38 },
  { x: 31, y: 38 },
  { x: 32, y: 38 },
  { x: 24, y: 39 },
  { x: 25, y: 39 },
  { x: 24, y: 40 },
  { x: 25, y: 40 },
  { x: 24, y: 38 },
  { x: 25, y: 38 },
  { x: 24, y: 37 },
  { x: 23, y: 39 },
  { x: 23, y: 38 },
  { x: 23, y: 37 },
  { x: 33, y: 37 },
  { x: 33, y: 36 },
  { x: 25, y: 37 },
  { x: 24, y: 36 },
  { x: 25, y: 36 },
  { x: 26, y: 39 },
  { x: 27, y: 39 },
  { x: 28, y: 39 },
  { x: 29, y: 39 },
  { x: 30, y: 39 },
  { x: 27, y: 40 },
  { x: 28, y: 40 },
  { x: 29, y: 40 },
  { x: 30, y: 40 },
  { x: 27, y: 41 },
  { x: 28, y: 41 },
  { x: 29, y: 41 },
  { x: 30, y: 41 },
  { x: 27, y: 42 },
  { x: 28, y: 42 },
  { x: 29, y: 42 },
  { x: 30, y: 42 },
  { x: 27, y: 43 },
  { x: 28, y: 43 },
  { x: 29, y: 43 },
  { x: 30, y: 43 },
  { x: 27, y: 44 },
  { x: 28, y: 44 },
  { x: 29, y: 44 },
  { x: 30, y: 44 },
  { x: 31, y: 43 },
  { x: 31, y: 44 },
  { x: 28, y: 45 },
  { x: 29, y: 45 },
  { x: 30, y: 45 },
  { x: 28, y: 46 },
  { x: 29, y: 46 },
  { x: 30, y: 46 },
  { x: 31, y: 45 },
  { x: 15, y: 35 },
  { x: 16, y: 35 },
  { x: 17, y: 35 },
  { x: 18, y: 35 },
  { x: 19, y: 35 },
  { x: 20, y: 35 },
  { x: 15, y: 36 },
  { x: 16, y: 36 },
  { x: 17, y: 36 },
  { x: 18, y: 36 },
  { x: 19, y: 36 },
  { x: 20, y: 36 },
  { x: 16, y: 37 },
  { x: 17, y: 37 },
  { x: 18, y: 37 },
  { x: 19, y: 37 },
  { x: 20, y: 37 },
  { x: 21, y: 37 },
  { x: 15, y: 38 },
  { x: 15, y: 37 },
  { x: 14, y: 38 },
  { x: 14, y: 37 },
  { x: 14, y: 36 },
  { x: 21, y: 36 },
  { x: 16, y: 38 },
  { x: 17, y: 38 },
  { x: 18, y: 38 },
  { x: 19, y: 38 },
  { x: 13, y: 39 },
  { x: 14, y: 39 },
  { x: 15, y: 39 },
  { x: 16, y: 39 },
  { x: 17, y: 39 },
  { x: 20, y: 38 },
  { x: 13, y: 40 },
  { x: 14, y: 40 },
  { x: 15, y: 40 },
  { x: 16, y: 40 },
  { x: 17, y: 40 },
  { x: 18, y: 40 },
  { x: 13, y: 41 },
  { x: 14, y: 41 },
  { x: 15, y: 41 },
  { x: 16, y: 41 },
  { x: 17, y: 41 },
  { x: 18, y: 41 },
  { x: 13, y: 42 },
  { x: 14, y: 42 },
  { x: 15, y: 42 },
  { x: 16, y: 42 },
  { x: 13, y: 43 },
  { x: 14, y: 43 },
  { x: 15, y: 43 },
  { x: 16, y: 43 },
  { x: 13, y: 44 },
  { x: 14, y: 44 },
  { x: 15, y: 44 },
  { x: 16, y: 44 },
  { x: 13, y: 45 },
  { x: 14, y: 45 },
  { x: 15, y: 45 },
  { x: 14, y: 46 },
  { x: 15, y: 46 },
  { x: 16, y: 45 },
  { x: 17, y: 42 },
  { x: 18, y: 42 },
  { x: 19, y: 40 },
  { x: 19, y: 41 },
  { x: 20, y: 40 },
  { x: 20, y: 41 },
  { x: 19, y: 42 },
  { x: 3, y: 46 },
  { x: 4, y: 46 },
  { x: 5, y: 46 },
  { x: 6, y: 46 },
  { x: 7, y: 46 },
  { x: 8, y: 46 },
  { x: 9, y: 46 },
  { x: 4, y: 45 },
  { x: 5, y: 45 },
  { x: 6, y: 45 },
  { x: 7, y: 45 },
  { x: 8, y: 45 },
  { x: 9, y: 45 },
  { x: 10, y: 45 },
  { x: 4, y: 44 },
  { x: 5, y: 44 },
  { x: 6, y: 44 },
  { x: 7, y: 44 },
  { x: 8, y: 44 },
  { x: 9, y: 44 },
  { x: 10, y: 44 },
  { x: 2, y: 42 },
  { x: 3, y: 42 },
  { x: 4, y: 42 },
  { x: 5, y: 42 },
  { x: 6, y: 42 },
  { x: 2, y: 43 },
  { x: 3, y: 43 },
  { x: 4, y: 43 },
  { x: 2, y: 44 },
  { x: 3, y: 44 },
  { x: 2, y: 45 },
  { x: 3, y: 45 },
  { x: 5, y: 43 },
  { x: 7, y: 42 },
  { x: 8, y: 42 },
  { x: 3, y: 41 },
  { x: 4, y: 41 },
  { x: 5, y: 41 },
  { x: 6, y: 41 },
  { x: 7, y: 41 },
  { x: 8, y: 41 },
  { x: 9, y: 41 },
  { x: 3, y: 40 },
  { x: 4, y: 40 },
  { x: 5, y: 40 },
  { x: 6, y: 40 },
  { x: 7, y: 40 },
  { x: 8, y: 40 },
  { x: 9, y: 40 },
  { x: 4, y: 38 },
  { x: 5, y: 38 },
  { x: 6, y: 38 },
  { x: 7, y: 38 },
  { x: 8, y: 38 },
  { x: 9, y: 38 },
  { x: 10, y: 38 },
  { x: 5, y: 37 },
  { x: 6, y: 37 },
  { x: 7, y: 37 },
  { x: 8, y: 37 },
  { x: 9, y: 37 },
  { x: 10, y: 37 },
  { x: 11, y: 37 },
  { x: 5, y: 36 },
  { x: 6, y: 36 },
  { x: 7, y: 36 },
  { x: 8, y: 36 },
  { x: 9, y: 36 },
  { x: 10, y: 36 },
  { x: 11, y: 36 },
  { x: 4, y: 36 },
  { x: 4, y: 37 },
  { x: 3, y: 38 },
  { x: 3, y: 39 },
  { x: 4, y: 39 },
  { x: 6, y: 39 },
  { x: 5, y: 39 },
  { x: 2, y: 41 },
  { x: 5, y: 35 },
  { x: 6, y: 35 },
  { x: 7, y: 35 },
  { x: 8, y: 35 },
  { x: 9, y: 35 },
  { x: 10, y: 35 },
  { x: 36, y: 35 },
  { x: 37, y: 35 },
  { x: 38, y: 35 },
  { x: 39, y: 35 },
  { x: 40, y: 35 },
  { x: 41, y: 35 },
  { x: 52, y: 35 },
  { x: 53, y: 35 },
  { x: 54, y: 35 },
  { x: 55, y: 35 },
  { x: 53, y: 36 },
  { x: 54, y: 36 },
  { x: 55, y: 36 },
  { x: 56, y: 36 },
  { x: 53, y: 37 },
  { x: 54, y: 37 },
  { x: 55, y: 37 },
  { x: 56, y: 37 },
  { x: 54, y: 38 },
  { x: 55, y: 38 },
  { x: 56, y: 38 },
  { x: 57, y: 38 },
  { x: 51, y: 38 },
  { x: 52, y: 38 },
  { x: 53, y: 38 },
  { x: 50, y: 37 },
  { x: 51, y: 37 },
  { x: 52, y: 37 },
  { x: 55, y: 39 },
  { x: 56, y: 39 },
  { x: 57, y: 39 },
  { x: 55, y: 40 },
  { x: 56, y: 40 },
  { x: 57, y: 40 },
  { x: 55, y: 41 },
  { x: 56, y: 41 },
  { x: 57, y: 41 },
  { x: 55, y: 42 },
  { x: 56, y: 42 },
  { x: 57, y: 42 },
  { x: 55, y: 43 },
  { x: 56, y: 43 },
  { x: 57, y: 43 },
  { x: 55, y: 44 },
  { x: 56, y: 44 },
  { x: 57, y: 44 },
  { x: 55, y: 45 },
  { x: 56, y: 45 },
  { x: 57, y: 45 },
  { x: 50, y: 39 },
  { x: 51, y: 39 },
  { x: 52, y: 39 },
  { x: 49, y: 40 },
  { x: 50, y: 40 },
  { x: 51, y: 40 },
  { x: 51, y: 41 },
  { x: 52, y: 41 },
  { x: 53, y: 41 },
  { x: 48, y: 41 },
  { x: 49, y: 41 },
  { x: 50, y: 41 },
  { x: 52, y: 42 },
  { x: 53, y: 42 },
  { x: 54, y: 42 },
  { x: 52, y: 43 },
  { x: 53, y: 43 },
  { x: 54, y: 43 },
  { x: 49, y: 42 },
  { x: 50, y: 42 },
  { x: 51, y: 42 },
  { x: 49, y: 43 },
  { x: 50, y: 43 },
  { x: 51, y: 43 },
  { x: 48, y: 44 },
  { x: 49, y: 44 },
  { x: 50, y: 44 },
  { x: 47, y: 42 },
  { x: 47, y: 43 },
  { x: 48, y: 43 },
  { x: 47, y: 44 },
  { x: 48, y: 45 },
  { x: 49, y: 45 },
  { x: 49, y: 39 },
  { x: 50, y: 38 },
  { x: 48, y: 40 },
  { x: 49, y: 38 },
  { x: 52, y: 36 },
  { x: 51, y: 36 },
  { x: 54, y: 44 },
  { x: 53, y: 44 },
  { x: 54, y: 45 },
  { x: 55, y: 46 },
  { x: 56, y: 46 },
  { x: 60, y: 46 },
  { x: 61, y: 46 },
  { x: 62, y: 46 },
  { x: 63, y: 46 },
  { x: 64, y: 46 },
  { x: 65, y: 46 },
  { x: 59, y: 45 },
  { x: 60, y: 45 },
  { x: 61, y: 45 },
  { x: 62, y: 45 },
  { x: 63, y: 45 },
  { x: 64, y: 45 },
  { x: 59, y: 44 },
  { x: 60, y: 44 },
  { x: 61, y: 44 },
  { x: 62, y: 44 },
  { x: 63, y: 44 },
  { x: 64, y: 44 },
  { x: 59, y: 43 },
  { x: 60, y: 43 },
  { x: 61, y: 43 },
  { x: 62, y: 43 },
  { x: 63, y: 43 },
  { x: 64, y: 43 },
  { x: 62, y: 36 },
  { x: 63, y: 36 },
  { x: 64, y: 36 },
  { x: 65, y: 36 },
  { x: 66, y: 36 },
  { x: 67, y: 36 },
  { x: 62, y: 35 },
  { x: 61, y: 37 },
  { x: 61, y: 36 },
  { x: 60, y: 37 },
  { x: 63, y: 35 },
  { x: 64, y: 35 },
  { x: 65, y: 35 },
  { x: 66, y: 35 },
  { x: 64, y: 42 },
  { x: 65, y: 42 },
  { x: 66, y: 42 },
  { x: 67, y: 42 },
  { x: 68, y: 42 },
  { x: 60, y: 39 },
  { x: 61, y: 39 },
  { x: 62, y: 39 },
  { x: 63, y: 39 },
  { x: 60, y: 38 },
  { x: 61, y: 38 },
  { x: 62, y: 38 },
  { x: 63, y: 38 },
  { x: 65, y: 43 },
  { x: 66, y: 43 },
  { x: 67, y: 43 },
  { x: 68, y: 43 },
  { x: 65, y: 44 },
  { x: 66, y: 44 },
  { x: 67, y: 44 },
  { x: 65, y: 45 },
  { x: 66, y: 45 },
  { x: 67, y: 45 },
  { x: 65, y: 41 },
  { x: 66, y: 41 },
  { x: 67, y: 41 },
  { x: 62, y: 41 },
  { x: 63, y: 41 },
  { x: 64, y: 41 },
  { x: 64, y: 40 },
  { x: 65, y: 40 },
  { x: 66, y: 40 },
  { x: 61, y: 40 },
  { x: 62, y: 40 },
  { x: 60, y: 42 },
  { x: 61, y: 42 },
  { x: 65, y: 38 },
  { x: 66, y: 38 },
  { x: 63, y: 40 },
  { x: 68, y: 44 },
  { x: 64, y: 39 },
  { x: 62, y: 37 },
  { x: 63, y: 37 },
  { x: 64, y: 37 },
  { x: 65, y: 37 },
  { x: 66, y: 37 },
  { x: 67, y: 37 },
  { x: 48, y: 42 },
  { x: 36, y: 36 },
  { x: 35, y: 36 },
  { x: 37, y: 36 },
  { x: 38, y: 36 },
  { x: 39, y: 36 },
  { x: 40, y: 36 },
  { x: 41, y: 36 },
  { x: 42, y: 36 },
  { x: 39, y: 37 },
  { x: 40, y: 37 },
  { x: 41, y: 37 },
  { x: 42, y: 37 },
  { x: 38, y: 38 },
  { x: 39, y: 38 },
  { x: 40, y: 38 },
  { x: 41, y: 38 },
  { x: 35, y: 37 },
  { x: 36, y: 37 },
  { x: 37, y: 37 },
  { x: 38, y: 37 },
  { x: 35, y: 39 },
  { x: 36, y: 39 },
  { x: 37, y: 39 },
  { x: 38, y: 39 },
  { x: 35, y: 40 },
  { x: 34, y: 40 },
  { x: 34, y: 39 },
  { x: 36, y: 40 },
  { x: 37, y: 40 },
  { x: 38, y: 40 },
  { x: 34, y: 41 },
  { x: 35, y: 41 },
  { x: 36, y: 41 },
  { x: 37, y: 41 },
  { x: 38, y: 41 },
  { x: 39, y: 41 },
  { x: 40, y: 41 },
  { x: 41, y: 41 },
  { x: 34, y: 42 },
  { x: 35, y: 42 },
  { x: 36, y: 42 },
  { x: 37, y: 42 },
  { x: 38, y: 42 },
  { x: 39, y: 42 },
  { x: 40, y: 42 },
  { x: 39, y: 40 },
  { x: 40, y: 40 },
  { x: 41, y: 40 },
  { x: 35, y: 38 },
  { x: 36, y: 38 },
  { x: 37, y: 38 },
  { x: 34, y: 43 },
  { x: 35, y: 43 },
  { x: 36, y: 43 },
  { x: 37, y: 43 },
  { x: 34, y: 44 },
  { x: 35, y: 44 },
  { x: 36, y: 44 },
  { x: 37, y: 44 },
  { x: 34, y: 45 },
  { x: 35, y: 45 },
  { x: 36, y: 45 },
  { x: 35, y: 46 },
  { x: 36, y: 46 },
  { x: 37, y: 45 },
];

const email = [
  // p
  { x: 0, y: 0 },
  { x: 0, y: 1 },
  { x: 0, y: 2 },
  { x: 0, y: 3 },
  { x: 0, y: 4 },
  { x: 0, y: 5 },
  { x: 1, y: 0 },
  { x: 1, y: 3 },
  { x: 2, y: 0 },
  { x: 2, y: 1 },
  { x: 2, y: 2 },
  { x: 2, y: 3 },

  // o
  { x: 4, y: 0 },
  { x: 4, y: 1 },
  { x: 4, y: 2 },
  { x: 4, y: 3 },
  { x: 4, y: 4 },
  { x: 4, y: 5 },
  { x: 5, y: 0 },
  { x: 5, y: 5 },
  { x: 6, y: 0 },
  { x: 6, y: 1 },
  { x: 6, y: 2 },
  { x: 6, y: 3 },
  { x: 6, y: 4 },
  { x: 6, y: 5 },

  // s
  { x: 8, y: 0 },
  { x: 8, y: 1 },
  { x: 8, y: 2 },
  { x: 8, y: 3 },
  { x: 8, y: 5 },
  { x: 9, y: 0 },
  { x: 9, y: 3 },
  { x: 9, y: 5 },
  { x: 10, y: 0 },
  { x: 10, y: 3 },
  { x: 10, y: 4 },
  { x: 10, y: 5 },

  // t
  { x: 12, y: 0 },
  { x: 13, y: 0 },
  { x: 13, y: 1 },
  { x: 13, y: 2 },
  { x: 13, y: 3 },
  { x: 13, y: 4 },
  { x: 13, y: 5 },
  { x: 14, y: 0 },

  // @
  { x: 16, y: 0 },
  { x: 16, y: 1 },
  { x: 16, y: 2 },
  { x: 16, y: 3 },
  { x: 16, y: 4 },
  { x: 16, y: 5 },
  { x: 17, y: 0 },
  { x: 17, y: 5 },
  { x: 18, y: 0 },
  { x: 18, y: 2 },
  { x: 18, y: 3 },
  { x: 18, y: 5 },
  { x: 19, y: 0 },
  { x: 19, y: 3 },
  { x: 19, y: 5 },
  { x: 20, y: 0 },
  { x: 20, y: 1 },
  { x: 20, y: 2 },
  { x: 20, y: 3 },
  { x: 20, y: 5 },

  // e
  { x: 22, y: 0 },
  { x: 22, y: 1 },
  { x: 22, y: 2 },
  { x: 22, y: 3 },
  { x: 22, y: 4 },
  { x: 22, y: 5 },
  { x: 23, y: 0 },
  { x: 23, y: 3 },
  { x: 23, y: 5 },
  { x: 24, y: 0 },
  { x: 24, y: 3 },
  { x: 24, y: 5 },

  // f
  { x: 26, y: 0 },
  { x: 26, y: 1 },
  { x: 26, y: 2 },
  { x: 26, y: 3 },
  { x: 26, y: 4 },
  { x: 26, y: 5 },
  { x: 27, y: 0 },
  { x: 27, y: 3 },
  { x: 28, y: 0 },
  { x: 28, y: 3 },

  // t
  { x: 30, y: 0 },
  { x: 31, y: 0 },
  { x: 31, y: 1 },
  { x: 31, y: 2 },
  { x: 31, y: 3 },
  { x: 31, y: 4 },
  { x: 31, y: 5 },
  { x: 32, y: 0 },

  // f
  { x: 34, y: 0 },
  { x: 34, y: 1 },
  { x: 34, y: 2 },
  { x: 34, y: 3 },
  { x: 34, y: 4 },
  { x: 34, y: 5 },
  { x: 35, y: 0 },
  { x: 35, y: 3 },
  { x: 36, y: 0 },
  { x: 36, y: 3 },

  // .
  { x: 38, y: 5 },

  // n
  { x: 40, y: 0 },
  { x: 40, y: 1 },
  { x: 40, y: 2 },
  { x: 40, y: 3 },
  { x: 40, y: 4 },
  { x: 40, y: 5 },
  { x: 41, y: 0 },
  { x: 42, y: 0 },
  { x: 43, y: 1 },
  { x: 43, y: 2 },
  { x: 43, y: 3 },
  { x: 43, y: 4 },
  { x: 43, y: 5 },

  // o
  { x: 45, y: 0 },
  { x: 45, y: 1 },
  { x: 45, y: 2 },
  { x: 45, y: 3 },
  { x: 45, y: 4 },
  { x: 45, y: 5 },
  { x: 46, y: 0 },
  { x: 46, y: 5 },
  { x: 47, y: 0 },
  { x: 47, y: 1 },
  { x: 47, y: 2 },
  { x: 47, y: 3 },
  { x: 47, y: 4 },
  { x: 47, y: 5 },
];
