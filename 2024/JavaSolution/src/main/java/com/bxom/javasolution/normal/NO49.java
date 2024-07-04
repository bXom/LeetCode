package com.bxom.javasolution.normal;

import lombok.extern.slf4j.Slf4j;

import java.util.*;

@Slf4j
public class NO49 {
    private static List<List<String>> map(String[] strs) {
        Map<String, List<String>> resultMap = new HashMap<>();
        for (String str : strs) {
            int[] pointArr = new int[26];
            for (int i = 0; i < str.length(); i++) {
                pointArr[str.charAt(i) - 'a']++;
            }
            StringBuilder sb = new StringBuilder();
            for (int i : pointArr) {
                sb.append(i);
                sb.append(',');
            }
            String pointStr = sb.toString();
            if (resultMap.containsKey(pointStr)) {
                resultMap.get(pointStr).add(str);
            } else {
                List<String> arr = new ArrayList<>();
                arr.add(str);
                resultMap.put(pointStr, arr);
            }
        }
        List<List<String>> resultList = new ArrayList<>();
        resultMap.forEach((k, v) -> {
            resultList.add(v);
        });
        return resultList;
    }
    public static void main(String[] args) throws Exception {
        log.info("traverse result: {}", map(new String[]{"eat","tea","tan","ate","nat","bat"}));
        log.info("traverse result: {}", map(new String[]{"hhhhu","tttti","tttit","hhhuh","hhuhh","tittt"}));
        log.info("traverse result: {}", map(new String[]{"bdddddddddd","bbbbbbbbbbc"}));
    }
}
