package com.bxom.javasolution.normal;

import lombok.extern.slf4j.Slf4j;

import java.util.HashSet;
import java.util.Set;

@Slf4j
public class NO3 {
    public static int lengthOfLongestSubstring(String s) {
        if (s.length() < 1) return 0;
        int max = 1;
        int strLen = s.length();
        int i = 0;
        int j = 1;
        while (j <= strLen) {
            String str = s.substring(i, j);
            if (checkSub(str)) {
                if (str.length() > max) {
                    max = str.length();
                }
            } else {
                i++;
            }
            j++;
        }
        return max;
    }

    public static boolean checkSub(String str) {
        int len = str.length();
        Set<String> strSet = new HashSet<>();
        for (int i = 0; i < len; i++) {
            String s = str.substring(i, i + 1);
            if (" ".equals(s)) s = "11";
            if (strSet.contains(s)) return false;
            strSet.add(s);
        }
        return true;
    }

    public static int simpleFunc(String s) {
        if (s.length() < 1) return 0;
        int max = 1;
        int strLen = s.length();
        Set<String> strSet = new HashSet<>();
        int left = 0;
        int right = 0;
        for (; left <= right; left++) {
            String start = s.substring(left, left+1);
            log.info("start: {}", start);
            if (!start.equals(s.substring(right, right+1))) strSet.remove(start);
            for (; right < strLen+1; right++) {
                log.info("str: {}", s.substring(left, right));
                String end = s.substring(right, right+1);
                log.info("end: {}", end);
                if (strSet.contains(end)) {
                    break;
                } else {
                    strSet.add(end);
                    if ((right - left) > max) max = right - left;
                }
            }
        }
        return max;
    }

    public static void main(String[] args) throws Exception {
//        log.info("result: {}", lengthOfLongestSubstring("ss3ds2"));
        log.info("result: {}", simpleFunc("ss3ds2"));
    }
}
