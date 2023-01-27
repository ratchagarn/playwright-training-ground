export const random = (min: number, max: number) =>
  parseInt((Math.random() * max + min).toString(), 10)

export default function simulatePageLoad(ms?: number) {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(true)
    }, ms ?? random(250, 1000))
  )
}
