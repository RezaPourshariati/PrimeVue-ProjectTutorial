const items = [
    {
        "Id": 0,
        "bookId": "01961",
        "volume": "006",
        "sectionNo": 1,
        "pageNo": 377,
        "startIndexInFromPage": 0,
        "bookTitle": "الدر المنثور في التفسیر بالمأثور"
    },
    {
        "Id": 1,
        "bookId": "20803",
        "volume": "004",
        "sectionNo": 1,
        "pageNo": 2432,
        "startIndexInFromPage": 0,
        "bookTitle": "جامع التفسیر من کتب الأحادیث"
    },
    {
        "Id": 2,
        "bookId": "20803",
        "volume": "004",
        "sectionNo": 1,
        "pageNo": 2386,
        "startIndexInFromPage": 0,
        "bookTitle": "جامع التفسیر من کتب الأحادیث"
    },
    {
        "Id": 3,
        "bookId": "20803",
        "volume": "004",
        "sectionNo": 1,
        "pageNo": 2426,
        "startIndexInFromPage": 0,
        "bookTitle": "جامع التفسیر من کتب الأحادیث"
    },
    {
        "Id": 4,
        "bookId": "21913",
        "volume": "006",
        "sectionNo": 1,
        "pageNo": 488,
        "startIndexInFromPage": 0,
        "bookTitle": "إرشاد الحيران إلي توجیهات القرآن"
    },
    {
        "Id": 5,
        "bookId": "01942",
        "volume": "032",
        "sectionNo": 1,
        "pageNo": 334,
        "startIndexInFromPage": 0,
        "bookTitle": "التفسیر الکبیر(مفاتیح الغیب)"
    },
    {
        "Id": 6,
        "bookId": "21825",
        "volume": "007",
        "sectionNo": 1,
        "pageNo": 4072,
        "startIndexInFromPage": 0,
        "bookTitle": "‌فتح الرحمن في تفسير القران"
    },
    {
        "Id": 7,
        "bookId": "11501",
        "volume": "020",
        "sectionNo": 1,
        "pageNo": 568,
        "startIndexInFromPage": 0,
        "bookTitle": "اللباب فی علوم الکتاب"
    },
    {
        "Id": 8,
        "bookId": "20803",
        "volume": "004",
        "sectionNo": 1,
        "pageNo": 2455,
        "startIndexInFromPage": 0,
        "bookTitle": "جامع التفسیر من کتب الأحادیث"
    },
    {
        "Id": 9,
        "bookId": "01942",
        "volume": "032",
        "sectionNo": 1,
        "pageNo": 335,
        "startIndexInFromPage": 0,
        "bookTitle": "التفسیر الکبیر(مفاتیح الغیب)"
    },
    {
        "Id": 10,
        "bookId": "20803",
        "volume": "004",
        "sectionNo": 1,
        "pageNo": 2417,
        "startIndexInFromPage": 0,
        "bookTitle": "جامع التفسیر من کتب الأحادیث"
    },
    {
        "Id": 11,
        "bookId": "01389",
        "volume": "030",
        "sectionNo": 1,
        "pageNo": 516,
        "startIndexInFromPage": 0,
        "bookTitle": "تفسیر التحریر و التنویر المعروف بتفسیر ابن عاشور"
    },
    {
        "Id": 12,
        "bookId": "01961",
        "volume": "006",
        "sectionNo": 1,
        "pageNo": 401,
        "startIndexInFromPage": 0,
        "bookTitle": "الدر المنثور في التفسیر بالمأثور"
    }
];

// Sort the items by bookTitle
items.sort((a, b) => a.bookTitle.localeCompare(b.bookTitle));

// Initialize the result list
const result = [];

// Iterate through the sorted items
for (let i = 0; i < items.length; i++) {
    // If the current item's bookTitle is the same as the previous item's bookTitle,
    // add it to the result list
    if (i > 0 && items[i].bookTitle === items[i - 1].bookTitle) {
        result.push(items[i]);
    }
    // Otherwise, add the current item to the result list and start a new group
    else {
        result.push(items[i]);
        result.push({ isGroupStart: true });
    }
}

// Remove the last group start marker if it exists
if (result[result.length - 1].isGroupStart) {
    result.pop();
}

console.log(result);



items.sort((a, b) => a.bookTitle.localeCompare(b.bookTitle));

// Now, data is sorted by 'bookTitle'
console.log(items);