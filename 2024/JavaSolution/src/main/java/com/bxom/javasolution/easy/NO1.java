package com.bxom.javasolution.easy;

import lombok.extern.slf4j.Slf4j;

import java.util.HashMap;
import java.util.Map;

@Slf4j
public class NO1 {

    /**
     * 哈希表
     *
     * @param nums
     * @param target
     * @return
     */
    private static int[] hashTable(int[] nums, int target) {
        Map<Integer, Integer> hTable = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int y = target - nums[i];
            if (hTable.containsKey(y)) {
                return new int[]{hTable.get(y), i};
            }
            hTable.put(nums[i], i);
        }
        return new int[]{};
    }

    /**
     * 嵌套遍历
     *
     * @param nums
     * @param target
     * @return
     */
    private static int[] traverse(int[] nums, int target) {
        for (int i = 0; i < nums.length; i++) {
            for (int j = i + 1; j < nums.length; j++) {
                if (nums[i] + nums[j] == target) {
                    return new int[]{i, j};
                }
            }
        }
        return new int[]{};
    }

    public static void main(String[] args) throws Exception {
        log.info("traverse result: {}", traverse(new int[]{1, 2, 3}, 4));
        log.info("hashTable result: {}", hashTable(new int[]{1, 2, 3}, 4));
    }
}
