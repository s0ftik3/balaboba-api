const axios = require('axios');
const randomUseragent = require('random-useragent');

module.exports = class Balaboba {
    /**
     * The number must be 0 to 12.
     * @param {Number} style 0-12 styles
     * @returns Boolean.
     */
    checkRequest(style) {
        return (style < 0 || style > 12) ? false : true;
    }

    /**
     * Request to Yandex API services.
     * @param {String} query Text of the query
     * @param {Number} intro 0-12 styles
     * @returns An object of data.
     */
    async requestData(query, intro) {
        if (!this.checkRequest(intro)) {
            return {
                status: 'error',
                message: 'Bad request, style must be 0 to 12.'
            }
        } else {
            const result = await axios({
                method: 'POST',
                url: 'https://yandex.ru/lab/api/yalm/text3',
                headers: {
                    Accept: '*/*',
                    'Content-Type': 'application/json',
                    Origin: 'https://yandex.ru',
                    Referer: 'https://yandex.ru/',
                    'User-Agent': randomUseragent.getRandom()
                },
                data: {
                    filter: 1,
                    intro: intro,
                    query: query
                }
            }).then(response => {
                return {
                    status: 'ok',
                    data: response.data
                };
            }).catch(error => {
                return {
                    status: 'error',
                    data: error
                };
            });

            return result;
        }
    }
    
    /**
     * This function generates random text based on your query.
     * @param {String} text Your query
     * @param {Number} style 0-12 styles
     * @returns String of text.
     */
    async generate(text, style = 0) {
        return await this.requestData(text, style).then(response => {
            if (response.status !== 'ok') {
                return response.message;
            } else {
                return response.data.query + response.data.text;
            }
        });
    }
}