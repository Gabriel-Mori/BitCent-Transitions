export default class Data {

    private static language = 'pt-BR'

    static ddmmyy = {
        formatar(dt: Date, separator: string = '/'): string {
            const day = dt.getDate().toString().padStart(2, '0')
            const month = (dt.getMonth() + 1).toString().padStart(2, '0')
            return `${day}${separator}${month}${separator}${dt.getFullYear()}`
        }
    }

    static mmyy = {
        formatar(dt: Date, language?: string): string {
            return dt?.toLocaleDateString?.(language ?? Data.language, {
                month: 'long',
                year: 'numeric',
            } as Intl.DateTimeFormatOptions)
        },
    }

    static ddmm = {
        formatar(dt: Date): string {
            return dt?.toLocaleDateString?.(
                Data.language, {
                    day: '2-digit',
                    month: 'short',
                } as Intl.DateTimeFormatOptions
            )
        }
    }

    static month() {
        return Array(12).fill(0).map((_, i) => new Date(2000, i, 1)
            .toLocaleDateString(Data.language, { month: 'short' })
            .toUpperCase()
            .substring(0, 3))
    }

    static firstDay(dt: Date) {
        return new Date(dt.getFullYear(), dt.getMonth(), 1)
    }

    static lastDay(dt: Date) {
        return new Date(dt.getFullYear(), dt.getMonth() + 1, 0, 23, 59, 59)
    }
}