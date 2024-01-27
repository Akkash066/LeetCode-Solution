Romove Duplicats From Sorted Array

class Solution {
    public int removeDuplicates(int[] nums) {
        int lastUniqueIndex = 0;
        for(int i = 0; i<nums.length; i++){
            if(nums[lastUniqueIndex] != nums[i]){
                nums[lastUniqueIndex + 1] = nums[i];
                lastUniqueIndex++;
            }
        }
        return lastUniqueIndex + 1;
    }
}
