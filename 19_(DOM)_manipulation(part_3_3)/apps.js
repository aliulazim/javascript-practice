/*

To Day Learn
=> createElement()
=> appendChild()
=> append()
=> prepend()
=> insertBefore()
=> insertAdjacentElement()
=> removeChild()
=> remove()

*/


// => createElement()
// const newElement = document.createElement('li') // Create a new element tag (li)
// undefined
// newElement
// <li>​</li>​
// console.dir(newElement) // Derectory check
// VM359:1 li
// undefined
// newElement.innerText = 'Item Six' // Inpute value console
// "Item Six"


// => appendChild()
// const newElement = document.createElement('li') // Create a new element tag (li)
// undefined
// newElement
// <li>​</li>​
// console.dir(newElement) // Derectory check
// VM574:1 li
// undefined
// newElement.innerText = 'Item Six' // Inpute value console
    
// "Item Six"
// const ul = document.querySelector('ul') // inpute newElement value  under ul tag select
// undefined
// ul.appendChild(newElement) // And final inpute newElement value  under ul tag Use appendChild() -- Spourt all Brower
// <li>​Item Six​</li>​ // And show (DOM)


// => append()
// const newElement = document.createElement('li') // Create a new element tag (li)
// undefined
// newElement
// <li>​</li>​
// console.dir(newElement) // Derectory check
// VM574:1 li
// undefined
// newElement.innerText = 'Item Six' // Inpute value console
    
// "Item Six"
// const ul = document.querySelector('ul') // inpute newElement value  under ul tag select
// undefined
// ul.appendChild(newElement, anotherElement, moreElement) 
// // And final inpute maltipule Element value  under ul tag Use append() -- windows explore Brower not Spourt
// <li>​Item Six​</li>​ // And show (DOM)


// => prepend()

// newElement
// <li>​</li>​
// newElement.innerText = 'Item Six'
    
// "Item Six"
// const ul = document.querySelector('ul')
// ul.appendChild(newElement)
// <li>​Item Six​</li>​
// ul.prepend(newElement)
// undefined




// => insertBefore()

// const li = document.createElement('li') // Create a new element tag (li)
// undefined
// li.innerText = 'I am New Li'  // Inpute value console
// "I am New Li"
// const ul = document.querySelector('ul') // inpute newElement value  under ul tag select
// undefined
// const lis = document.querySelectorAll('li') // inpute newElement value spacifice under ul > li tag 
// undefined
// lis
// NodeList(5) [li.single-item, li.single-item, li.single-item, li.single-item, li.single-item]
// ul.insertBefore(li, lis[1]); // inpute newElement value  spacifice under ul > li tag (0 index bacic)  

const myImg = document.createElement('img');
myImg.src = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxANCggICAgICAgJCAoICAoKCxsICQcKIB0WIiAdHx8kKCgsJCYxJx8fLTEtJSkrLi4uIyszOD8tNygtLisBCgoKDg0NFRAPFS0ZFR4rLSsuKystLSsrKystLS0rKysrLS03LS0rLS0tKzc3OCsrLSstNzctKzctKy0tLS0rN//AABEIAKABHAMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAADBAACBQEGBwj/xAA6EAACAQMCBQMCAwcDAwUAAAABAgMAERIEISIxQVFhBRNxMoFCkbEUI1KhweHwM2LRFZLxFkNygtL/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/EACQRAQEAAgEEAgIDAQAAAAAAAAABAhEhAxIxQRNRFGEiQoEE/9oADAMBAAIRAxEAPwDHBq4NDFWFGRVq4oQNEBoCCrCqA0QUV0CriqirChFhRENBvV1NFNKaupoKGiqaA60dDSymio1A6jcqYQ0ij96PDJvzoO6mEMb0uNIdrHrvenWO+wv8UESENupAv1oBSwFbWBINVU0xqdTYWW1zteklNWJTSGirQENMJVBkFHQUFKOlAxEKYWl0NFQ0UZaMlBWjIaIYSmENLJTEYoGYzyphTS6CjJQEqVKlZEqVKlB+d7V0Gumq3rSCA1YGhXroNQlMKauDQAasDUWGFNWBoINWDVAW9WBoQNXU0UdDR1NKqaIGqhgtXUely1dR6B+A3O5pqIC9hzrOik7G1OpMLc96LGtAoxF+dC1cYVS3QUlBrbEgm46V3V6jJLA2HiocaKSzZMbchttUQ0ICiqK2yaiPKmUNKRimY+lCGY6OpoCGjKaijKaMhoCUwg71QZDR46CooyUDMYplDSqUZKBgPRVNCjXlejKKIuDVxXAOVdqUSpUqVB+eTXCa6RVSa0yhNQGqE1y9Sw2MG6URTSwb86Ir1GpTAPeoDQQ1EB70BQ1EU0vftREagYBqwNBBogNFEJ6VAaoTXAaBhW7GrrJ5oANWBqhlWooba1LqaKtNIKvmjIKGlGSqCIKZQUJDRUNAwgo6rS6GmEqKYhXvTAXtQIulqbiS9B1EoqjxVgtrCrC3LrQRKZj6UKNL9Kbii5AUBYl60cCuILACrUEqVKlRKlSpUoPz44oLinVS/K1BljtzG9bZ0TNVJojjtQyOe1RHC9rkAt4H1UF9W4sE07uLtxkY/wAudEt3pbV6zC6LkH5g2yWsZzje9NQZNceIlDcbe2v1Lvtz60vP6weFYzGsj8wylsN7fnSkk7SsFVVQtxBzfJO9FMwkVYnGct8skGGHbnXn3Z/at/4sdY+OMLyXcsCSQzZdCOpF6tptXOpAJMzA3C5cLX6H8jVTCvtuQdxiOE/Tvz/OrBDGpKR5lgttyrZHa57dq5WWTiLHoNM7FQZRGsl2uqHJVXpRs6xIdWcSqysHjVmkd1zXnyvz+9NQ6u4fNxdVXckKuRHQd66dPrzxfKWNINVgaUgmyYqcQFC7E8bN3+KbSvRjlLOE0uDVg1DI7VwGtxDaNRkak1NEV6oeR6Mj1nrJRkkoNBHoytSCSUdJOVA9G1NxGs+NqbiPKxqK04uhFNo+wA2Pes6F/NOxNyJqBq97Lz7kUaKG5vewFBjcc6MJug5UDSDoDR4zakkPUmjK/mgcDV0GlhJRo370BKlVyqwNBKlSpRHwdRjQZRe96acUrKedbZoLACguR4qzmlZwCCTbYNufw+aUK6jXKM1U4sFujOODLtbnWbLq/cQGS6PdeJLYv83qHTJcokpkc8RsnAv3q/s2UAhNtyVH1LXnyuV9NSQJFvch7qAzS3OOXxt/eiwSCw2YA82ZcvjbnVmTFeGPInfgGKtbwf1oMg/dsVGJRt/wtieW1/NYs35jWxZNSVVWV4/aZlAYMWlaxvcDxV9NMzxkJK6hmsGZQrsw537DzQYtIuDFZHkkRVNv4W57bUzp41LCwWOP2ldj+LE7bDqTvUuN1wSiaeN8QECqL3L2zZl7k+e350xNGSSGVCXLOSo4sP8AnpQNSADH7d7EYxoWDK3ckWt151Q6tlQKI5GkcsCyksqN2PxflyrlMZMv5Fv0a4w8isfbkJVo8CWZ7dLcxemtNqJcoxgoiGRyQYq23IjnWUiusiNGpB6mQ8Xg/wCGtHTahyTI0mWORvcomNtrC386cY3jir5bEOpV1DIbiiqaVWXYW/8AzV1kr3Y71yxs0W6C1QGgBupoqmtKMlFWhKaIpohiOmUU7UpG/Km4pOVA1FH5p6BOV6SikpyKSlU9GnKmUXsaSjk80yklZDaijJSqSdzRkkoGgaur96XEnmr+5QMK9FV6UR6Mr1QyrURDSytRVegZBqUNWogNRHwZ5e9AdqA8nY0F5a2zatqScTg4Q98c/wCVZZd9wLsrfU72ZcewHO/zTjyUs65XkaTE3VVQ24efWuXV1pcaltuEXsbXYYt+lDeN1JA4iRsfw1eUsSAAWLC91t/Md6pFcsFJJB/hvw/NcZ1MtcRbHBCyrH7igA7kZZIvm55fFA1Ue4CLZpMlJBxxbnuPNaFr3VuRFufalp48bKpuei34latdPPumr5L5U0s5Q3XFpEDEsxyZn5HfwT+lDh2SQnmjNe5+prkgX+LUEsoN0Ug8LSC+Kq197+b/AKVyMA5vHJ7l5FIBP6Cpb6U0sZlt7gRCd13yeBfHzXXhwAJVnKtiLE8fk35f2rqxsEMtlN3Xe+LZc7D42q4PK+QBFymWSsx6nvUuFt4mzcXjQHFyXuBYAnFVosC47C7xgWEbHLHfoTQUO7MSTsoRfpVe9WDfauk6cynM1pN6aIk7G4oglrOEnmiLJ5rvJqM7aSy0xG1+QJtzt+GslZrbkFgN7D8XivO+o+vPI2C5QR5NkiyHjXyO9Yzyss1Fle8jnBuFZSRzsfpq/ucrmvH6D1kLGryqkbIFiUxqI80A69yaP/6lTNwAViGOLlcmb7Xrnj1dy7nhZXrkl80xHN5rC0OtEqh1BUcPMjip1Ja6yzKcEu2wk/mm4tRy33rGik6k0zHL5q6G7FN3NHTUgczWEk3IA0wJNtzc00bbP7WOjCiLq/NYQfzTEUvLemjbbTVXphJuV6xk1HmjJqvNNG2ykvmirL5rGXV+aIurpo221l80RZvNYo1fmrDV+aaNtxJvNHE3msBdX5oo1f8Aupo2+Gy66EoYx7i6gFWEgJwZe1rUr+0dGdS3cnH/AAViP6hlYJGqMFW5H0u9+1LvOz2jPDYdBXkvdvimo3n1qm4UkMOfDlQRqeJzbBcsiXGGDWtz+1LJozirNa977/Uy+aZUgECVHCorbghl7chW85cpzSa2JpNSGkYRh3uGBYfSn5/FNObRxldsh+8dB9W9DiBQCOMLeQqbABsrmltTqCh9tii5dFOS4jkPFcLO2zTW57Mo/MDYAfUTxfNXWTbcOw/CL4+L/NLRai65BU52vf8ASrJqeIKLE8RJtkqN/SusxlkrO4qVBaQe0GDRrIfxYWI/W4/w0TTaYPMSBiU00smQH0KCtzbwCaosxDo5Yqpyjk/hwIsf6H7USA4yTLlkX0c0cbA4ruU5/a9dJxuUnKSyAsWVRGt+FB+FaqDUlAAUod+RF8vvQwa7461wxfPIt66GoQqwrSChq6HoQroNUH9zqOleO1cmUjkhQSzXxPCvivV35g7g8683rXCaiZ1A/wBRrZD8XXbtXLPhYXUEkgB2AO43/SnTAowkZ7XLFoyQrKw6cuf5Chx+oMLEFQ65WYqGyuLW5frRodX7kmcsaPnj7gUY5269r1yvE4a21PRtaF/dZuiySfu7EMy372HevTJN359d6w/TovbZnGnEDOmMjX4m35W+wNaCvWulhreU9s26rTjm80yk/mslH80ZX8120bayTeaMs/mshJPNFWTzTS7bCTeaIs/mslZvNGWWmk21km80T3uxrJWbtRBL5q6Gqs3mjxy/7qx1k80ZJD80RsJJ5q/vW51lRTHkL3o4ZjsSKEPjUVcajzWcL9uVEGXanBdvz8o/eBQdieda8WmREM0smLOGMSp/qtbx0oMEkYKxMigA88Rly6mjSoAwdGLXG7hRwrccq8XdzvTroWKGWRVYL7a2YgsMm+5ozKVUPJZwI2OQPBkPPzShMJuWOpeyMxI48G6A+Ce1W1Ud4dKY+MahXKj6VxFt7dDub/FMr4sqyHNNqk9ssuCTMG4jIGZX33A59qp6dpl1M0ULg5OVW5b8PWsz9j4heSO7Dq/tov3omjkk08on08kTFRcrlll+YrjZvdl5PPk16hGYZ9V6eYm99JWjhIbFduRN+lqt6XBjIvvoIQrKJMmzae/UDqak/qvu6mLVTe37vtot3QcYAsTtz5bGuQuZdWZjGWAkte2KRIBYfFJlZJvhnUOSQg+4i8nDIpYcSqeR+a7pGwkDzKZdNHFNBIPxe6ceXbcC57HanoNOXUGIe7vb92MlZvFYnqEjRaichFA/0yTZsntvsew6V2zzmU/jd0lsOvIJS0qurAlja2OPj46VUgcIBGQHEP4W7Vmx6pmYskeKqv70i3GgNtwOVEEpy7F2xtngqr0JB3771J1cp59JYcK+KgFNQANGWcWdEyIH04jn96sIwdxb7V6cOpMptnRUKeYBt8VMfi/K34vypfVzZahIYJBG8bYSs5xTE2I+16ANbMjStNIGwxwVF4O2xty2+96tz54NbaIjPY1i+u6UKffJsZMYwgH1N3v/AEp7UaneEvqGd3/eCNAY1gWx5nnc7bW5VefTHVaZXkyjjiDSGRXGGVjtbvy3rGfWnirJqvN6SG5FyBfhGX05V6TQejiI3lUTZRuhUgrixGxHwd96f0vpUMcccbqrMTkzNw5sBy+PFO++gMakXEo4QeFl351LZ5vhb+iwjJ3sdh2+mjJFuoJ3dGZLDJdul6nqLhViYLx3S4vjip2N/FEBXDTwsoWVVa6Kpxy2ty2PKmXW1Jok+1SpW4bhsLm5/DRQhBsVINr/AP171zVzC4xKEGb27knj2O1rbf2paTXNGBErqZEj3ZuJlYnkBS9eejtOoCWxA4v4Twt+VEF9yehxP+1u1Ai1iyzQMQjuqsHYcOLdK02ZQJHYgq6qv+7x96x+TqyWL2cb2XU0ZHqhCAkXNxJ7fL8VKy65UcgjKIf+4D+fzXo756rOq1EHU0RCNuIEE2BB/FWTqdeDGDGXWxUkEYsy1NJrRf2wHJ/bOAlhjjztUy6siyPRezsLlQSdrnGjrCwsSVA8GsGf1BskzTELuebfzrT0nqMRW0jKoORjUHiXsCP60nUl8GmpEAbn6QuIDW+qio6Fgoe7MbVgeoepKNOf2ZWMgO+R4F89yKS9P9QZGcSkyAC+R/DftTun2uq9sIgNyQPmrhB3rynqXqt4I3jlsFLRyR3yddtjf5q/pOsyhLT690cyGwvzWwrNpp829S9K9oQSRzRNaZojlZXZ+txc3/8AFMLp5j7oQwp7QYkuwZVU77eaqvvIzwvHHJG4YZlM1lvc3B6Eb7Xq0rPK8un0stjLIobJiqS2F7k9Lm/514e+6k3C0jLFIoEYZE2aNkWzq19yRty6W6XoWtzx0eQkTTpAoCNwojEnLboTtTftSw5e8GZQzYSIQyZeOtr2oXqs5VY/cRHaXikdhxN2/Pc1qZbuvKyryOkrQlR7b/6RjxLZptY9N/HipPpo1eQfvkD8UcbKFdt+ZHT46VnNPlZnKltgLU3o4RI7qquJXj9oH+B+9j47mpZqfSyz6ViQZLqlkCBJbgI2LLY9O960tFGC4OqkDRDKQxiQttYkbde1Bl9MK6dFWP2iq2LSEKzPbmN7i9aegK4IkpjZzCokZmGWXK3xYVz6mcs4uy2TkeCNDIREXVAFbN7rgp6bdqENIs6eoM0kUk8epWLaYYpCo3JJttc8+u9JP6idNqJIo4w+UTEKW4UXnepqPTpljiRlVRIvvMchlc3JJH9+tZ6cs5vG/BbNbKaD06WX3IYShjJcSWYJ2Nxv8fFaI9KKIon9Pzk4l9xplbPe42B2tt/Ok/ebTRRSRPYalvccCMZJ1tfzU0UuolkEpLxRg4Bjw8Hi/wCtdbllzeNMWtzSaWVACunWO4XINKkmW3zRW0jDIpBEpbmfcXja3UA87/yqiMVAHuux63YNxV33TY/vWv8AavN8uW+NMfJ+nmBCffngaNjqi3DuFVHPU22Ity+aamziJWUtqH9n25MmDOtyLAdLb35d6ceI/tfvAo6cIkZiMl26CraqIGTMKpEsie45uzbcx99vyrv83M39HerovRmRS8sOnaR1UW9wL7S/PU0ydIyRTD2o0T22ztLkuNt9uvj71zWatwFEAzzdY8fxL/aprNWE07q7MzvE8Ytd2Z7H+9cvlztnHlJn+hCJPdcDTCSPjjVgT02uB0O1/wA+dIRa11ndJo45cCyrHJ9Tb3+a0tbqwI5CCtudxf6b89t/ypPQQCL3J2dWD8V3BzA7eQOlX5bq7jVz54N+47cXsRxkooMjRllbp0/P7VZPUMc0ZdU4JWzQwFVRu4vy/rV9LrA8fuKY0UclcYnn2rsurKsgsjF8rWHFkK53rXerE7ys4hmADReoRspurrDi6/f+neq+3EoEb/8AUZkTLjaHFmvzF/8AOVaImJsTgCelq6JuVwp+1Z+fKL3xn6SSBAFJ17gbW9oRtl3uK2NG6TKsJ/aCScgZIh/TlQRL+IKBba4qwmJvexA3NzUy69vjyveKYVIKyQal7tk3CFV/50P9kRgVaHV2HGMgFy8C3eos9xcWIPUE10uD9Qv8mpP+jOHeAmnBVUbQ6tBdhYyDBVI57UGH2ImDNpvUI5I+0ZlTL5608sgA+kW+eFasJF/hN/BxrX5WXs7yaTaa5LH1Ft7kNpzj+lEA01yVbWgnqYCzUxmn8Lf9xroZOYR/+40/KvrZ3Au0JwBk1oCrgT+zH7/pXR7C8Xuax7HYeyct6KSnIo9/LGoDHy9trf8AyNX8m69r3AlNMzNxa4BjcgxHFqJ+xx/glOPTNHDfpRkjVjZISTa9gxyqt4xsRY9sjT8nL7q7fOotRdliEsgjWa6ruud9rne3LanIkIeTVLOhjZ/bGB+pgR0vexq+m9HxkRbM9wpbl/n/ABT0WhRb5Q5XiSMO3C+FzevVnnh6OHNVqF9gySoBFKyKHVvqI5i3U3ta3OkjqUjzjRU1EkYaOC5GWIsbnzboPNOS+nh9iFMeXuBA+Kqe/wDKofTUDGQhmYFWMlwzqw5G5rnjljIjCfWBpl1EkKRSX4sBjE21gbdTWjpfUJGuEEDqwd1aQDJSP8509P6Wk3E6MpYKVC2XBQOXx4qqekIEUocJBiMrDLn0rWXUwsmxSR5DAJCkTyqVsyfgv0v96BJ6e5u0bB8RcG2KytfkL/enE9P4CHLthz48cd+3Kq6jSSBCYNU6hTYo9YmU9UZqaB1mJKsrKASG+nLmNutac5dzDDI4YtEgkccWKAb/AJnb70rN6dJ7kWIzLKvuOWxxffrT8GIDxCNi7FTI1uJrchfnbxVzz4i3maIzCwiBBf2y7CPILjvYb7+KZV2YDN+IBRixyxXoAeoAoy6cf6mBDISLn+E9K5LpMyCHKBDeOs3OWarNk0HY2NmXh+eL4rpU7WKsD/CaYEYswYrZR2GONUaBcxIhCSWVTjw5bW5cqxLGO2BxMhuMwZCfpz4ttv6VZugOewba/E38qJ7aBlkeNSyj6v8Ab8VYlLom10yIa3erubNQsdVEGELe77rFRYA9aFqZrFoyjFFk9ksb9R+ljTyJZllKLkMrbfS1j/zVGjQ3LLfdTdbrxbirLNmp9EptesbFZQqnh6FlZbW/S1Gn9QTIQiMSI8a+20YyXfn+tHJUEljkDkLMcsV8VR4YiARHiEGIZTjw1d4+4vBaPUBCII9K6lHUcYK5b8/PLnemxqlLHIyIVO5biVlvYG4vtQhoozIJDK5dN1ybhZavqdArrdWKFhY4t9XO1L22rqGPdjBu0rrfpjiuR5URzEtw+sZWBUXK44t/WkB6ant2ZmItZhkcmqh9PswkMkslgkeDkS/e5rPZjfZqfTTTVQFjHLrWdlxjAJxxt8CuTwIwLJrZQrLbAIGy6HekzpttmDE7kOPpt0uBScvps1ikM6lANhcrz6WpOlN7l01qN8aMDELrWGWwWwbHoPtXIYSzS5anIqcYyq/gAF9u9715uPRaywDEOpbGzSBuHuD2plYp45AvtI6nYuBjlbrtVvRmvMXUeheIxPEmTS+6b5AZLa17i2xo4h6sALno/wBK3+KyIWkVYykkaXOZUseLzVpdXNYApHgmViXxZbjcDryrjenzxTUarw2sULkHoWH60Azgzfs6o/u4+5cjgVO+3Pesyb1FtnIeQIVk4Y8VXbc/53oyeqPkHjgRrLbkI1ZTvuO+9anS1zSSRqG4sSSwtf8A0zkv3oSOWkkaxAUrEgClm2G5+5NKp6yACGU5DbMkqvxbrVh6rEFksyMWe5uSvIWsB2/4rHxVdQ6p3BODlehUrjcfy+RWD6lr39+X3VX3L8RRSFk81o/9aQBX4EjU2YAccqH5PPyBSGo16yu0sbAD6eo+P5WrphhZ6NR//9k=';
const a = document.querySelector('a');
document.body.insertBefore(myImg, a);


// => insertAdjacentElement()

const bold = document.createElement('b');
bold.innerText = 'Bold Text';
const firstP = document.querySelector('p');
firstP.insertAdjacentElement("beforebegin", bold);
firstP.insertAdjacentElement("beforeend", bold);
firstP.insertAdjacentElement("afterbegin", bold);
firstP.insertAdjacentElement("afterend", bold);

// => removeChild()

// const ul = document.querySelector('ul');
// undefined
// const lis = document.querySelectorAll('li');
// undefined
// lis
// NodeList(5) [li.single-item, li.single-item, li.single-item, li.single-item, li.single-item]
// const deleted = ul.removeChild(lis[0]);
// undefined
// deleted
// <li class="single-item">Item One</li>


// => remove()

// bold
// <b>​Bold Text​</b>​
// bold.remove()
// undefined
// firstP
// <p class="paragraph">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem veniam perferendis nihil
//             sed dolores sint alias tempore,suscipit, velit rerum, sit consequuntur sapiente illum assumenda delectus 
//             natus. Est, libero voluptatibus?</p>
// firstP.remove()
// undefined