const TitleQuery = `
    query ($search: String) {
        Media(search: $search, type: ANIME) {
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
            episodes
            duration
            status
            description(asHtml: true)
            coverImage {
                large
            }
            season
            seasonYear
            startDate {
                day
                month
                year
            }
            averageScore
            favourites
            studios
            {
                edges
                {
                    node
                    {
                        name
                    }
                }
            }
            isAdult
        }
    }
`;

exports.TitleQuery = TitleQuery;
