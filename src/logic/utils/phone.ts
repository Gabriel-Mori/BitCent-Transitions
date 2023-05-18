export default class Telefone {
    private static default = '(??) ?????-????'

    static format(value: string): string {
        const nums = Telefone.unformat(value).split('')
        return nums.reduce((formatted: string, num: string) => {
            return formatted.replace('?', num)
        }, Telefone.default).split('?')[0].trim().replace(/[()-]$/, '')
    }

    static unformat(value: string): string {
        return value.replace(/[^0-9]+/g, '')
    }
}