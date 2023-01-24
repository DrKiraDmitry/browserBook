import { action, computed, makeAutoObservable } from "mobx";
import { BigText, VeryBigText } from "../components/Book/PageForBook/Text";

type Couple = {
    text: string;
    media?: [
        {
            element: number;
        }
    ];
}[][];

export class BookPageStore {
    Aside: boolean = false;
    BottomSide: boolean = false;
    Text: string = "";
    lengthPage = 1400;
    currentPage = 0;

    couple: Couple = [
        [
            {
                text: "text",
            },
            { text: "" },
        ],
    ];

    constructor() {
        makeAutoObservable(this);
    }

    @action init() {
        //48 вмещает сейчас
        // const res = VeryBigText;
        // this.Text = res;
    }

    // @action totalPages() {
    //     const howPages = Math.round(this.Text.length / this.lengthPage) + 1;
    //     return howPages % 2 ? howPages + 1 : howPages;
    // }
    //
    // @action cutText() {
    //     return new Array(this.totalPages()).fill(1).map((el, i) => {
    //         return this.Text.slice(i * this.lengthPage, (i + 1) * this.lengthPage);
    //     });
    // }

    @action TextAreaChange(text: string) {
        this.Text = text;
    }
}
