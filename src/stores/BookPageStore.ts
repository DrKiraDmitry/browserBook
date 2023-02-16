import { action, computed, makeAutoObservable } from "mobx";

type Couple = {
    text: string;
    media?: [
        {
            element: number;
        }
    ];
}[];

export class BookPageStore {
    Aside: boolean = false;
    BottomSide: boolean = false;
    currentPage = 1;

    allBook: Couple[] = [
        [
            {
                text: "",
            },
            {
                text: "",
            },
        ],
    ];

    currentCouple: Couple = this.allBook[Math.floor(this.currentPage % 2) ? this.currentPage - 1 : this.currentPage];

    constructor() {
        makeAutoObservable(this);
    }

    @action setCurrentPage(n: number) {
        let page = n;
        if (n === 0) page = 1;
        if (n <= 0) page = 1;
        if (this.allBook.length * 2 < n) page = this.allBook.length * 2;
        this.currentPage = page;
        return this.currentPage;
    }

    @computed get totalPage() {
        return this.allBook.length - 1;
    }

    @action init() {}
}
