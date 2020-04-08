export const textMixin = {
    data() {
        return {
            text: "some text"
        };
    },
    computed: {
        textReverse() {
            return this.text
                .split("")
                .reverse()
                .join("");
        },
        wordLength() {
            return `${this.text} (${this.text.length})`;
        }
    }
}