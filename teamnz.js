const steem = require('steem');

var seedrandom = require('seedrandom');

const {createServer} = require('http').createServer().listen(3000)

//CONSTANTS AND VARIABLES

      var steemStream;

      var check = 1;

      const ACCOUNT_NAME = 'teamnz';

      const TAG = 'teamnz';

      const ACCOUNT_KEY = process.env.POSTING_KEY;

/****************************************************************************************************************************************************/

const PIC_1='<a href="https://discord.gg/qnrMgjC"><img src="https://steemitimages.com/DQmd4kQbGtLcvLASrPVHZAYGCDcxd842shcQNp9ibFhhzoQ/1-c.png"></a><br><i>This is a curation bot for TeamNZ. Please join our AUS/NZ community on <a href="https://discord.gg/qnrMgjC">Discord</a>.<br><br>Why join discord room? <a href="https://steemit.com/steemit/@cryptonik/10-reasons-why-you-should-join-the-aus-and-nz-server-if-you-re-an-aussie-or-kiwi">Here are 10 reasons why.</a><br><br>Enjoying the bump? Please consider supporting your fellow Kiwis with a delegation. How? <a href="https://steemit.com/steemit/@cryptonik/how-to-delegate-to-the-team-australia-and-team-nz-community">Read here.</a><br><br>For any inquiries/issues about the bot please contact @cryptonik.</i>';

const PIC_2='<a href="https://discord.gg/qnrMgjC"><img src="https://steemitimages.com/DQmepkT4vyhdRahjgqPuyYyZFsPYiA1sFw1V3kHMNtEHCPr/2-c.png"></a><br><i>This is a curation bot for TeamNZ. Please join our AUS/NZ community on <a href="https://discord.gg/qnrMgjC">Discord</a>.<br><br>Why join discord room? <a href="https://steemit.com/steemit/@cryptonik/10-reasons-why-you-should-join-the-aus-and-nz-server-if-you-re-an-aussie-or-kiwi">Here are 10 reasons why.</a><<br><br>Enjoying the bump? Please consider supporting your fellow Kiwis with a delegation. How? <a href="https://steemit.com/steemit/@cryptonik/how-to-delegate-to-the-team-australia-and-team-nz-community">Read here.</a><br><br>For any inquiries/issues about the bot please contact @cryptonik.</i>';

const PIC_3='<a href="https://discord.gg/qnrMgjC"><img src="https://steemitimages.com/DQmUZsvUXAzCBkDbahofqT8fEuR9SVMPXz1SvRjqQHX4Sqx/3-c.png"></a><br><i>This is a curation bot for TeamNZ. Please join our AUS/NZ community on <a href="https://discord.gg/qnrMgjC">Discord</a>.<br><br>Why join discord room? <a href="https://steemit.com/steemit/@cryptonik/10-reasons-why-you-should-join-the-aus-and-nz-server-if-you-re-an-aussie-or-kiwi">Here are 10 reasons why.</a><<br><br>Enjoying the bump? Please consider supporting your fellow Kiwis with a delegation. How? <a href="https://steemit.com/steemit/@cryptonik/how-to-delegate-to-the-team-australia-and-team-nz-community">Read here.</a><br><br>For any inquiries/issues about the bot please contact @cryptonik.</i>';

const PIC_4='<a href="https://discord.gg/qnrMgjC"><img src="https://steemitimages.com/DQmYSAFygdmgvzt7k8wQ2v8yzTCmeN7MGyd4mBPkyFrh9UN/4-c.png"></a><br><i>This is a curation bot for TeamNZ. Please join our AUS/NZ community on <a href="https://discord.gg/qnrMgjC">Discord</a>.<br><br>Why join discord room? <a href="https://steemit.com/steemit/@cryptonik/10-reasons-why-you-should-join-the-aus-and-nz-server-if-you-re-an-aussie-or-kiwi">Here are 10 reasons why.</a><<br><br>Enjoying the bump? Please consider supporting your fellow Kiwis with a delegation. How? <a href="https://steemit.com/steemit/@cryptonik/how-to-delegate-to-the-team-australia-and-team-nz-community">Read here.</a><br><br>For any inquiries/issues about the bot please contact @cryptonik.</i>';

const PIC_5='<a href="https://discord.gg/qnrMgjC"><img src="https://steemitimages.com/DQmPE535mmx1E47nceRK6zt7Y679gw8Hf5Kp4X4eQ7PuTKw/5-c.jpg"></a><br><i>This is a curation bot for TeamNZ. Please join our AUS/NZ community on <a href="https://discord.gg/qnrMgjC">Discord</a>.<br><br>Why join discord room? <a href="https://steemit.com/steemit/@cryptonik/10-reasons-why-you-should-join-the-aus-and-nz-server-if-you-re-an-aussie-or-kiwi">Here are 10 reasons why.</a><<br><br>Enjoying the bump? Please consider supporting your fellow Kiwis with a delegation. How? <a href="https://steemit.com/steemit/@cryptonik/how-to-delegate-to-the-team-australia-and-team-nz-community">Read here.</a><br><br>For any inquiries/issues about the bot please contact @cryptonik.</i>';

const PIC_6='<a href="https://discord.gg/qnrMgjC"><img src="https://steemitimages.com/DQmfEVXjZeVSvZuKse5zwxMYsVuHjxkA2c2p8Sg3GsJ4pUp/6-c.png"></a><br><i>This is a curation bot for TeamNZ. Please join our AUS/NZ community on <a href="https://discord.gg/qnrMgjC">Discord</a>.<br><br>Why join discord room? <a href="https://steemit.com/steemit/@cryptonik/10-reasons-why-you-should-join-the-aus-and-nz-server-if-you-re-an-aussie-or-kiwi">Here are 10 reasons why.</a><<br><br>Enjoying the bump? Please consider supporting your fellow Kiwis with a delegation. How? <a href="https://steemit.com/steemit/@cryptonik/how-to-delegate-to-the-team-australia-and-team-nz-community">Read here.</a><br><br>For any inquiries/issues about the bot please contact @cryptonik.</i>';

const PIC_7='<a href="https://discord.gg/qnrMgjC"><img src="https://steemitimages.com/DQmWxhcqHToftGb7599uyexkYUm2ecfePi1hgAqruijgaBw/7-c.png"></a><br><i>This is a curation bot for TeamNZ. Please join our AUS/NZ community on <a href="https://discord.gg/qnrMgjC">Discord</a>.<br><br>Why join discord room? <a href="https://steemit.com/steemit/@cryptonik/10-reasons-why-you-should-join-the-aus-and-nz-server-if-you-re-an-aussie-or-kiwi">Here are 10 reasons why.</a><<br><br>Enjoying the bump? Please consider supporting your fellow Kiwis with a delegation. How? <a href="https://steemit.com/steemit/@cryptonik/how-to-delegate-to-the-team-australia-and-team-nz-community">Read here.</a><br><br>For any inquiries/issues about the bot please contact @cryptonik. Photo credits @lordnigel.</i>';

const PIC_8='<a href="https://discord.gg/qnrMgjC"><img src="https://steemitimages.com/DQme4bNT683EiZrUZGGySKt19GmXfu8gS79PTSitRzBpbLJ/8-c.png"></a><br><i>This is a curation bot for TeamNZ. Please join our AUS/NZ community on <a href="https://discord.gg/qnrMgjC">Discord</a>.<br><br>Why join discord room? <a href="https://steemit.com/steemit/@cryptonik/10-reasons-why-you-should-join-the-aus-and-nz-server-if-you-re-an-aussie-or-kiwi">Here are 10 reasons why.</a><<br><br>Enjoying the bump? Please consider supporting your fellow Kiwis with a delegation. How? <a href="https://steemit.com/steemit/@cryptonik/how-to-delegate-to-the-team-australia-and-team-nz-community">Read here.</a><br><br>For any inquiries/issues about the bot please contact @cryptonik.</i>';

const PIC_9='<a href="https://discord.gg/qnrMgjC"><img src="https://steemitimages.com/DQmNnWDmokxiEuh3SFdkAcCuNiNa5sTaYDRRjkNDovky4W5/9-c.png"></a><br><i>This is a curation bot for TeamNZ. Please join our AUS/NZ community on <a href="https://discord.gg/qnrMgjC">Discord</a>.<br><br>Why join discord room? <a href="https://steemit.com/steemit/@cryptonik/10-reasons-why-you-should-join-the-aus-and-nz-server-if-you-re-an-aussie-or-kiwi">Here are 10 reasons why.</a><<br><br>Enjoying the bump? Please consider supporting your fellow Kiwis with a delegation. How? <a href="https://steemit.com/steemit/@cryptonik/how-to-delegate-to-the-team-australia-and-team-nz-community">Read here.</a><br><br>For any inquiries/issues about the bot please contact @cryptonik.</i>';

const PIC_10='<a href="https://discord.gg/qnrMgjC"><img src="https://steemitimages.com/DQmd3DvcgNKJkAwb4jhiuMhVSTaZwZc4foTwjyfbqUtczTg/10-c.png"></a><br><i>This is a curation bot for TeamNZ. Please join our AUS/NZ community on <a href="https://discord.gg/qnrMgjC">Discord</a>.<br><br>Why join discord room? <a href="https://steemit.com/steemit/@cryptonik/10-reasons-why-you-should-join-the-aus-and-nz-server-if-you-re-an-aussie-or-kiwi">Here are 10 reasons why.</a><<br>For any inquiries/issues about the bot please contact @cryptonik.</i>';

const PIC_11='<a href="https://discord.gg/qnrMgjC"><img src="https://steemitimages.com/DQme4bNT683EiZrUZGGySKt19GmXfu8gS79PTSitRzBpbLJ/8-c.png"></a><br><i>This is a curation bot for TeamNZ. Please join our AUS/NZ community on <a href="https://discord.gg/qnrMgjC">Discord</a>.<br><br>Why join discord room? <a href="https://steemit.com/steemit/@cryptonik/10-reasons-why-you-should-join-the-aus-and-nz-server-if-you-re-an-aussie-or-kiwi">Here are 10 reasons why.</a><<br><br>Enjoying the bump? Please consider supporting your fellow Kiwis with a delegation. How? <a href="https://steemit.com/steemit/@cryptonik/how-to-delegate-to-the-team-australia-and-team-nz-community">Read here.</a><br><br>For any inquiries/issues about the bot please contact @cryptonik.</i>';

const PIC_12='<a href="https://discord.gg/qnrMgjC"><img src="https://steemitimages.com/DQmUZsvUXAzCBkDbahofqT8fEuR9SVMPXz1SvRjqQHX4Sqx/3-c.png"></a><br><i>This is a curation bot for TeamNZ. Please join our AUS/NZ community on <a href="https://discord.gg/qnrMgjC">Discord</a>.<br><br>Why join discord room? <a href="https://steemit.com/steemit/@cryptonik/10-reasons-why-you-should-join-the-aus-and-nz-server-if-you-re-an-aussie-or-kiwi">Here are 10 reasons why.</a><<br><br>Enjoying the bump? Please consider supporting your fellow Kiwis with a delegation. How? <a href="https://steemit.com/steemit/@cryptonik/how-to-delegate-to-the-team-australia-and-team-nz-community">Read here.</a><br><br>For any inquiries/issues about the bot please contact @cryptonik.</i>';

const PIC_13='### You just got a Team NZ upvote!<br><img src="https://cdn.steemitimages.com/DQmUetYH4s8MPtAkD1nPZzjTZ7F6KfDjp4LFBtNGbfnZyDc/1.jpg"><br><i>This is a curation bot for TeamNZ. Please join our AUS/NZ community on <a href="https://discord.gg/qnrMgjC">Discord</a>.<br><br>Why join discord room? <a href="https://steemit.com/steemit/@cryptonik/10-reasons-why-you-should-join-the-aus-and-nz-server-if-you-re-an-aussie-or-kiwi">Here are 10 reasons why.</a><<br><br>Enjoying the bump? Please consider supporting your fellow Kiwis with a delegation. How? <a href="https://steemit.com/steemit/@cryptonik/how-to-delegate-to-the-team-australia-and-team-nz-community">Read here.</a><br><br>For any inquiries/issues about the bot please contact @cryptonik.</i>';

const PIC_14='### You just got a Team NZ upvote!<br><img src="https://cdn.steemitimages.com/DQmPK13iTXeznXtiiDbP4eUwpLFjDmfAZ73vuioa8wRrhSt/2.jpg"><br><i>This is a curation bot for TeamNZ. Please join our AUS/NZ community on <a href="https://discord.gg/qnrMgjC">Discord</a>.<br><br>Why join discord room? <a href="https://steemit.com/steemit/@cryptonik/10-reasons-why-you-should-join-the-aus-and-nz-server-if-you-re-an-aussie-or-kiwi">Here are 10 reasons why.</a><<br><br>Enjoying the bump? Please consider supporting your fellow Kiwis with a delegation. How? <a href="https://steemit.com/steemit/@cryptonik/how-to-delegate-to-the-team-australia-and-team-nz-community">Read here.</a><br><br>For any inquiries/issues about the bot please contact @cryptonik.</i>';

const PIC_15='### You just got a Team NZ upvote!<br><img src="https://cdn.steemitimages.com/DQmdWGtsrFipXZPFT7JvQk6xa2rrfNC3NjsR6rnQ7g96T1G/4.jpg"><br><i>This is a curation bot for TeamNZ. Please join our AUS/NZ community on <a href="https://discord.gg/qnrMgjC">Discord</a>.<br><br>Why join discord room? <a href="https://steemit.com/steemit/@cryptonik/10-reasons-why-you-should-join-the-aus-and-nz-server-if-you-re-an-aussie-or-kiwi">Here are 10 reasons why.</a><<br><br>Enjoying the bump? Please consider supporting your fellow Kiwis with a delegation. How? <a href="https://steemit.com/steemit/@cryptonik/how-to-delegate-to-the-team-australia-and-team-nz-community">Read here.</a><br><br>For any inquiries/issues about the bot please contact @cryptonik.</i>';

const PIC_16='### You just got a Team NZ upvote!<br><img src="https://cdn.steemitimages.com/DQmXLHtjeNsHyvSfjnn9Z1LQcXiPgWRdMXvhnGb4CAEfKQ2/5.jpg"><br><i>This is a curation bot for TeamNZ. Please join our AUS/NZ community on <a href="https://discord.gg/qnrMgjC">Discord</a>.<br><br>Why join discord room? <a href="https://steemit.com/steemit/@cryptonik/10-reasons-why-you-should-join-the-aus-and-nz-server-if-you-re-an-aussie-or-kiwi">Here are 10 reasons why.</a><<br><br>Enjoying the bump? Please consider supporting your fellow Kiwis with a delegation. How? <a href="https://steemit.com/steemit/@cryptonik/how-to-delegate-to-the-team-australia-and-team-nz-community">Read here.</a><br><br>For any inquiries/issues about the bot please contact @cryptonik.</i>';

const PIC_17='### You just got a Team NZ upvote!<br><img src="https://cdn.steemitimages.com/DQmaZPV3WaguVwGCwdxwdHzCeq5a9oL9NVLpTdFHD6CxMod/6.png"><br><i>This is a curation bot for TeamNZ. Please join our AUS/NZ community on <a href="https://discord.gg/qnrMgjC">Discord</a>.<br><br>Why join discord room? <a href="https://steemit.com/steemit/@cryptonik/10-reasons-why-you-should-join-the-aus-and-nz-server-if-you-re-an-aussie-or-kiwi">Here are 10 reasons why.</a><<br>For any inquiries/issues about the bot please contact @cryptonik.</i>';

const PIC_18='### You just go a Team NZ upvote!<br><img src="https://cdn.steemitimages.com/DQmWgTcWWNd22pbFJxUxHSQrDYdpng7BQhrTPdgueBkMXq2/7.jpg"><br><i>This is a curation bot for TeamNZ. Please join our AUS/NZ community on <a href="https://discord.gg/qnrMgjC">Discord</a>.<br><br>Why join discord room? <a href="https://steemit.com/steemit/@cryptonik/10-reasons-why-you-should-join-the-aus-and-nz-server-if-you-re-an-aussie-or-kiwi">Here are 10 reasons why.</a><<br><br>Enjoying the bump? Please consider supporting your fellow Kiwis with a delegation. How? <a href="https://steemit.com/steemit/@cryptonik/how-to-delegate-to-the-team-australia-and-team-nz-community">Read here.</a><br><br>For any inquiries/issues about the bot please contact @cryptonik.</i>';

const PIC_19='### You just got a Team NZ upvote!<br><img src="https://cdn.steemitimages.com/DQmYPSmnGH7ZVjYQKiGu7PhCpojDRo8D7bXGP6KdxBraRVz/8.jpg"><br><i>This is a curation bot for TeamNZ. Please join our AUS/NZ community on <a href="https://discord.gg/qnrMgjC">Discord</a>.<br><br>Why join discord room? <a href="https://steemit.com/steemit/@cryptonik/10-reasons-why-you-should-join-the-aus-and-nz-server-if-you-re-an-aussie-or-kiwi">Here are 10 reasons why.</a><<br><br>Enjoying the bump? Please consider supporting your fellow Kiwis with a delegation. How? <a href="https://steemit.com/steemit/@cryptonik/how-to-delegate-to-the-team-australia-and-team-nz-community">Read here.</a><br><br>For any inquiries/issues about the bot please contact @cryptonik.</i>';

const PIC_20='### You just got a Team NZ upvote!<br><img src="https://cdn.steemitimages.com/DQmNdbVCGQoHnW4A18NC5aDvhoZGxseTn54Po7mu8QwGK3k/9.jpg"><br><i>This is a curation bot for TeamNZ. Please join our AUS/NZ community on <a href="https://discord.gg/qnrMgjC">Discord</a>.<br><br>Why join discord room? <a href="https://steemit.com/steemit/@cryptonik/10-reasons-why-you-should-join-the-aus-and-nz-server-if-you-re-an-aussie-or-kiwi">Here are 10 reasons why.</a><<br><br>Enjoying the bump? Please consider supporting your fellow Kiwis with a delegation. How? <a href="https://steemit.com/steemit/@cryptonik/how-to-delegate-to-the-team-australia-and-team-nz-community">Read here.</a><br><br>For any inquiries/issues about the bot please contact @cryptonik.</i>';

const PIC_21='### You just got a Team NZ upvote!<br><img src="https://cdn.steemitimages.com/DQme2Q9cQiMxwTTZp9TGKpgW6ic4QjiqQmdsAS1u7MV5sHn/10.jpg"><br><i>This is a curation bot for TeamNZ. Please join our AUS/NZ community on <a href="https://discord.gg/qnrMgjC">Discord</a>.<br><br>Why join discord room? <a href="https://steemit.com/steemit/@cryptonik/10-reasons-why-you-should-join-the-aus-and-nz-server-if-you-re-an-aussie-or-kiwi">Here are 10 reasons why.</a><<br><br>Enjoying the bump? Please consider supporting your fellow Kiwis with a delegation. How? <a href="https://steemit.com/steemit/@cryptonik/how-to-delegate-to-the-team-australia-and-team-nz-community">Read here.</a><br><br>For any inquiries/issues about the bot please contact @cryptonik.</i>';

const PIC_22='### You just got a Team NZ upvote!<br><img src="https://cdn.steemitimages.com/DQmbW4ZjXC4C2Bjyu2cPevuQKXv1Nu2XxEd4hmi8bpGXkSr/12.jpg"><br><i>This is a curation bot for TeamNZ. Please join our AUS/NZ community on <a href="https://discord.gg/qnrMgjC">Discord</a>.<br><br>Why join discord room? <a href="https://steemit.com/steemit/@cryptonik/10-reasons-why-you-should-join-the-aus-and-nz-server-if-you-re-an-aussie-or-kiwi">Here are 10 reasons why.</a><<br><br>Enjoying the bump? Please consider supporting your fellow Kiwis with a delegation. How? <a href="https://steemit.com/steemit/@cryptonik/how-to-delegate-to-the-team-australia-and-team-nz-community">Read here.</a><br><br>For any inquiries/issues about the bot please contact @cryptonik.</i>';

const PIC_23='### You just got a Team NZ upvote!<br><img src="https://steemitimages.com/DQmUZsvUXAzCBkDbahofqT8fEuR9SVMPXz1SvRjqQHX4Sqx/3-c.png"><br><i>This is a curation bot for TeamNZ. Please join our AUS/NZ community on <a href="https://discord.gg/GjSqbNx">Discord</a>.<br><br>Why join discord room? <a href="https://steemit.com/steemit/@cryptonik/10-reasons-why-you-should-join-the-aus-and-nz-server-if-you-re-an-aussie-or-kiwi">Here are 10 reasons why.</a><<br><br>Enjoying the bump? Please consider supporting your fellow Kiwis with a delegation. How? <a href="https://steemit.com/steemit/@cryptonik/how-to-delegate-to-the-team-australia-and-team-nz-community">Read here.</a><br><br>For any inquiries/issues about the bot please contact @cryptonik.</i>';

const PIC_24='### You just got a Team NZ upvote!<br><img src="https://discord.gg/qnrMgjC"><img src="https://cdn.steemitimages.com/DQmaFbT1WseiT2JD7Szq62fwAjHHmGZo6EfwD563GLLo2mJ/14.jpg"></a><br><i>This is a curation bot for TeamNZ. Please join our AUS/NZ community on <a href="https://discord.gg/qnrMgjC">Discord</a>.<br><br>Why join discord room? <a href="https://steemit.com/steemit/@cryptonik/10-reasons-why-you-should-join-the-aus-and-nz-server-if-you-re-an-aussie-or-kiwi">Here are 10 reasons why.</a><<br><br>Enjoying the bump? Please consider supporting your fellow Kiwis with a delegation. How? <a href="https://steemit.com/steemit/@cryptonik/how-to-delegate-to-the-team-australia-and-team-nz-community">Read here.</a><br><br>For any inquiries/issues about the bot please contact @cryptonik.</i>';

const PIC_25='### You just got a Team NZ upvote!<br><img src="https://discord.gg/GjSqbNx"><img src="https://cdn.steemitimages.com/DQmNQDEmV47rWLtQD8gzHNqxS6xL6RWECGiHJ5xo8diChrq/15.jpg"><br><i>This is a curation bot for TeamNZ. Please join our AUS/NZ community on <a href="https://discord.gg/qnrMgjC">Discord</a>.<br><br>Why join discord room? <a href="https://steemit.com/steemit/@cryptonik/10-reasons-why-you-should-join-the-aus-and-nz-server-if-you-re-an-aussie-or-kiwi">Here are 10 reasons why.</a><<br><br>Enjoying the bump? Please consider supporting your fellow Kiwis with a delegation. How? <a href="https://steemit.com/steemit/@cryptonik/how-to-delegate-to-the-team-australia-and-team-nz-community">Read here.</a><br><br>For any inquiries/issues about the bot please contact @cryptonik.</i>';

const PIC_26='### You just got a Team NZ upvote!<br><img src="https://cdn.steemitimages.com/DQmZ3HuMKinkvKw5jHaZXhefYc9JssRjxbVeWfm2J7LGsmd/16.jpg"><br><i>This is a curation bot for TeamNZ. Please join our AUS/NZ community on <a href="https://discord.gg/qnrMgjC">.<br><br>Why join discord room? <a href="https://steemit.com/steemit/@cryptonik/10-reasons-why-you-should-join-the-aus-and-nz-server-if-you-re-an-aussie-or-kiwi">Here are 10 reasons why.</a><<br><br>Enjoying the bump? Please consider supporting your fellow Kiwis with a delegation. How? <a href="https://steemit.com/steemit/@cryptonik/how-to-delegate-to-the-team-australia-and-team-nz-community">Read here.</a><br><br>For any inquiries/issues about the bot please contact @cryptonik.</i>';

const PIC_27='### You just got a Team NZ upvote!<br><img src="https://cdn.steemitimages.com/DQmchsWA6PvHPSfrFYPH56mT1c2T7T25ZJwuqyKRgFGgCiC/17.jpg"><br><i>This is a curation bot for TeamNZ. Please join our AUS/NZ community on <a href="https://discord.gg/qnrMgjC">Discord</a>.<br><br>Why join discord room? <a href="https://steemit.com/steemit/@cryptonik/10-reasons-why-you-should-join-the-aus-and-nz-server-if-you-re-an-aussie-or-kiwi">Here are 10 reasons why.</a><<br><br>Enjoying the bump? Please consider supporting your fellow Kiwis with a delegation. How? <a href="https://steemit.com/steemit/@cryptonik/how-to-delegate-to-the-team-australia-and-team-nz-community">Read here.</a><br><br>For any inquiries/issues about the bot please contact @cryptonik.</i>';

const PIC_28='### You just got a Team NZ upvote!<br><img src="https://cdn.steemitimages.com/DQmQAsxNj6Ne5jxCGjKaXSt7oFg8rChoR7ADXvpdRd7XkdD/18.jpg"><br><i>This is a curation bot for TeamNZ. Please join our AUS/NZ community on <a href="https://discord.gg/qnrMgjC">Discord</a>.<br><br>Why join discord room? <a href="https://steemit.com/steemit/@cryptonik/10-reasons-why-you-should-join-the-aus-and-nz-server-if-you-re-an-aussie-or-kiwi">Here are 10 reasons why.</a><<br><br>Enjoying the bump? Please consider supporting your fellow Kiwis with a delegation. How? <a href="https://steemit.com/steemit/@cryptonik/how-to-delegate-to-the-team-australia-and-team-nz-community">Read here.</a><br><br>For any inquiries/issues about the bot please contact @cryptonik.</i>';

const PIC_29='### You just got a Team NZ upvote!<br><img src="https://cdn.steemitimages.com/DQmRz7PuskhAV6MqRAgmRbT9K7oKHCkFRnDeb1rb2pveTME/20.jpg"><br><i>This is a curation bot for TeamNZ. Please join our AUS/NZ community on <a href="https://discord.gg/qnrMgjC">Discord</a>.<br><br>Why join discord room? <a href="https://steemit.com/steemit/@cryptonik/10-reasons-why-you-should-join-the-aus-and-nz-server-if-you-re-an-aussie-or-kiwi">Here are 10 reasons why.</a><<br><br>Enjoying the bump? Please consider supporting your fellow Kiwis with a delegation. How? <a href="https://steemit.com/steemit/@cryptonik/how-to-delegate-to-the-team-australia-and-team-nz-community">Read here.</a><br><br>For any inquiries/issues about the bot please contact @cryptonik.</i>';

const PIC_30='### You just got a Team NZ upvote!<br><img src="https://cdn.steemitimages.com/DQmadZ51rFyGJqqax5fZeLj2vPZ4NjPHzskusqexqWhmqwQ/22.jpg"><br><i>This is a curation bot for TeamNZ. Please join our AUS/NZ community on <a href="https://discord.gg/qnrMgjC">Discord</a>.<br><br>Why join discord room? <a href="https://steemit.com/steemit/@cryptonik/10-reasons-why-you-should-join-the-aus-and-nz-server-if-you-re-an-aussie-or-kiwi">Here are 10 reasons why.</a><<br><br>Enjoying the bump? Please consider supporting your fellow Kiwis with a delegation. How? <a href="https://steemit.com/steemit/@cryptonik/how-to-delegate-to-the-team-australia-and-team-nz-community">Read here.</a><br><br>For any inquiries/issues about the bot please contact @cryptonik.</i>';

const PIC_31='### You just got a Team NZ upvote!<br><img src="https://steemitimages.com/DQmVd4aMhoXWCv55iu4yocgYn3jmMcNZXdK6u7cw2LbL7xX/image.png"><br><i>This is a curation bot for TeamNZ. Please join our AUS/NZ community on <a href="https://discord.gg/qnrMgjC">Discord</a>.<br><br>Why join discord room? <a href="https://steemit.com/steemit/@cryptonik/10-reasons-why-you-should-join-the-aus-and-nz-server-if-you-re-an-aussie-or-kiwi">Here are 10 reasons why.</a><<br><br>Enjoying the bump? Please consider supporting your fellow Kiwis with a delegation. How? <a href="https://steemit.com/steemit/@cryptonik/how-to-delegate-to-the-team-australia-and-team-nz-community">Read here.</a><br><br>For any inquiries/issues about the bot please contact @cryptonik.</i>';

const PIC_32='### You just got a Team NZ upvote!<br><img src="https://steemitimages.com/DQmeWi8eKHgMcoii4otUNutR9opf2wjULfuVNJWsghRDq2u/image.png"><br><i>This is a curation bot for TeamNZ. Please join our AUS/NZ community on <a href="https://discord.gg/qnrMgjC">Discord</a>.<br><br>Why join discord room? <a href="https://steemit.com/steemit/@cryptonik/10-reasons-why-you-should-join-the-aus-and-nz-server-if-you-re-an-aussie-or-kiwi">Here are 10 reasons why.</a><<br><br>Enjoying the bump? Please consider supporting your fellow Kiwis with a delegation. How? <a href="https://steemit.com/steemit/@cryptonik/how-to-delegate-to-the-team-australia-and-team-nz-community">Read here.</a><br><br>For any inquiries/issues about the bot please contact @cryptonik.</i>';


/****************************************************************************************************************************************************/

var ARRAY_OF_PICS=[PIC_1,PIC_2,PIC_3,PIC_4,PIC_5,PIC_6,PIC_7,PIC_8,PIC_9,PIC_10,PIC_11,PIC_12,PIC_13,PIC_14,PIC_15,PIC_16,PIC_17,PIC_18,PIC_19,PIC_20,PIC_21,PIC_22,PIC_23,PIC_24,PIC_25,PIC_26,PIC_27,PIC_28,PIC_29,PIC_30,PIC_31,PIC_32];

/****************************************************************************************************************************************************/

// WHITELIST

var blacklist = ['mutiarahmi','srimulyani','adam.smit'];

var whitelist = ['webcoop','locikll','forykw','kiwisims','frot','trisquelwhare','dvlogs','stbathans','lordnigel','archs','kiwioz','ravenruis','cryptonik','questingtw','devitech','zephyr119',
'imjustsaying','conradt','schopenhauer','jackmiller','trudeehunter','andysantics48','len.george','kiwiscanfly','john-unasa','melissakellie','biglipsmama','sift666','betelzeus','youvegotquail','kiwideb','samueldouglas','choogirl','ausbitbank',
'forkyw','masterswatch','uniforce','gamersclassified','agscotskiwi','andraskalmarart','bekindtobees','clouda','cjsound','cnandofer','cryptoiskey','datascience',
'eturnerx','figgy','flyyingkiwi','gerben','jgpro','kiwibloke','kiwioz','marianneyardley','markkennard','masterswatch','melissakellie','nalabra','oscillator','ravenruis','samuel-earpart','sift666','suzi3d','tattoodjay','trevor.george','unspecifiedindi','webstruxure','ryivhnn'];

//START

      console.log('Bot started. Checking transactions, listening to tags... ');

      steem.api.setOptions({ url: 'https://api.steemit.com' });

//TIMER

      setTimeout(function(){

        // start stream after 5 seconds

        startSteemStream()

      },5000)

//GET DATA FROM BLOCKCHAIN

function startSteemStream(){

steemStream = steem.api.streamTransactions('head', function(err, result) {

try{

    var txType = result.operations[0][0]

    var txData = result.operations[0][1]

//Check that it is a post

      if (txType=='comment' && (txData.parent_author=="")){

          var author = txData.author;

          var link = txData.permlink;

          //console.log('processing post by: ', author, ' link: ', link);

					var json;

          var problem;

            json = JSON.parse(txData.json_metadata);

                      if(json.hasOwnProperty('tags')){

                          hasTag=json.tags.indexOf(TAG);

                              if(hasTag > -1){

                                    if(blacklist.indexOf(author) > -1){

                                      console.log(author, ': This User is blacklisted.');

                                      postWarning(ACCOUNT_NAME,ACCOUNT_KEY,author,link);

                                                    }

                                    else if(whitelist.indexOf(author) > -1){

                                            console.log('Tag found in: ',link, ' by: ', author);

                                            postComment(ACCOUNT_NAME,ACCOUNT_KEY,author,link);

                                            sendVote(ACCOUNT_KEY, ACCOUNT_NAME, author, link, 10000);

                                                  }//close else if

                                    else{

                                      console.log('User not on list, post ignored.');

                                    }

                                            } // 1. close if hasTag

                                    }// 3. close hasOwnProperty

                        }//close if=comment

              }//TRY

              catch(error){

                console.log(error)

                // if error restart stream

                restartSteemStream()

                            } //catch

        }//close err funk

    );//close streamTransactions

}//steemStream

function endSteemStream(){

  steemStream()

}

function restartSteemStream(){

  endSteemStream()

  startSteemStream()

}

        function sendVote(ACCOUNT_KEY, ACCOUNT_NAME,author,link, weight){

            steem.broadcast.vote(ACCOUNT_KEY, ACCOUNT_NAME, author, link, weight, function(err, result) {

                console.log(err, result);

                console.log('Voted on post: ' ,link, ' by: ', author );

            });

        }

        function postWarning(ACCOUNT_NAME,ACCOUNT_KEY,author,link){

        var permlink = new Date().toISOString().replace(/[^a-zA-Z0-9]+/g, '').toLowerCase();

        steem.broadcast.comment(

          ACCOUNT_KEY,

          author, // Parent Author

          link, // Parent Permlink

          ACCOUNT_NAME, // Author

          permlink, // Permlink

          '', // Title

          '<h2>We do not encourage plagiarism, spam or tag abuse. This user has been blacklisted!</h2>', // Body,

          { tags: ['test'], app: 'steemjs' }, // Json Metadata

          function(err, result) {

            console.log(err, result);

            console.log('Commented on post.');

                                }

                        );

        }

        function postComment(ACCOUNT_NAME,ACCOUNT_KEY,author,link){

        var permlink = new Date().toISOString().replace(/[^a-zA-Z0-9]+/g, '').toLowerCase();

          rng = seedrandom();

          generator = Math.floor(rng()*(32 - 1 +1)) + 1; //32-sided-Dice with random Seed

          console.log('Generated number: ', generator);

	  dropstring=ARRAY_OF_PICS[generator-1];

        steem.api.getContentReplies(author, link, function(err, result) {

        // console.log(err, result);

        // console.log('Array length: ', result.length);

        check = 1;

        if(result.length>0){

          for(i=0;i<result.length;i++){

            if(result[i].author==ACCOUNT_NAME){

              check = 0;

                }

              }

            }

            if(check==1){

              	steem.broadcast.comment(

                ACCOUNT_KEY,

                author, // Parent Author

                link, // Parent Permlink

                ACCOUNT_NAME, // Author

                permlink, // Permlink

                '', // Title

                dropstring, // Body,

                { tags: ['kiwi'], app: 'steemjs' }, // Json Metadata

                function(err, result) {

                  console.log(err, result);

                  console.log('Commented on post.');

                                      }

                              );

                    }

            else {

              console.log('Commented on this post already!')

                }

          });

}


