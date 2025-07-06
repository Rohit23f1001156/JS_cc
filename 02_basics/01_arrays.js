/*
array-copy operations create shallow copy
shallow copy-> heap storage -> referencing used -> so changes to copy implies changes to og
deep copy -> stack storage -> copy made -> no referencing -> so changes to copy no effect on og
const arr = [1,2,3,4,"rohit"]
cont new_arr = new Array(1,2,3,"rohit")
my_arr.join() -> will convert the array to string(and binds it)
DIFFERENCE BETWEEN SLICE AND SPLICE:
in slice if range is (1,3), then value at index 3 ignored, and no changes to the og array
whereas,
in splice if range is (1,3), the value at index 3 is taken, and THE VALUES IN THIS RANGE ARE REMOVED FROM THE OG ARRAY

.push merges the second array into first as it is(that is in the form of array only, so number of elements is first is now +1)
.concat creates a new array, joining the two arrays just like we want
eg:
.push -> [1,2,3,[4,5,6]]
.concat -> [1,2,3,4,5,6]

but we use spread operator more than concat
eg: const new_Arr = [...arr1, ...arr2] -> same o/p as concat

*/