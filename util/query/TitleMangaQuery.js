const TitleQuery = `
    query ($search: String) {
        Media(search: $search, type: MANGA) {
            id
            title {
                romaji
                english
            }
            siteUrl
            type
            format
            genres
            status
                chapters
                volumes
            description(asHtml: true)
            coverImage {
                large
            }
            startDate {
                day
                month
                year
            }
            averageScore
            favourites
            chapters
            volumes
            isAdult
        }
    }
`;

exports.TitleQuery = TitleQuery;
