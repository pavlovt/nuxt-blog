export default function(array, length) {
    var limitCount = length ? parseInt(length, 10) : 10
    return array.slice(0, limitCount)
}