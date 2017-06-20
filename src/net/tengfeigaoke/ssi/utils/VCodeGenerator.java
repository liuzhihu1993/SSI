package net.tengfeigaoke.ssi.utils;

import java.awt.Font;
import java.io.OutputStream;

/***
 * 验证码生成器
 * 
 * @author 腾飞高科 做毕业设计请联系
 * @qq 2784851030
 */
public class VCodeGenerator
{
    final private char[] chars = "2345678ABCDEFGHJKLMPQRSTUVWXYabcdefhkmnqrstuvwx".toCharArray();
    
    private static String[] fontNames = new String[] {"Courier", "Arial", "Verdana", "Georgia", "Times", "Tahoma"};
    
    private static int[] fontStyle = new int[] {Font.PLAIN, Font.BOLD, Font.ITALIC, Font.BOLD | Font.ITALIC};
    
    private int width = 160;// 宽
    
    private int height = 60;// 高
    
    private int charCnt = 4;// 字符數
    
    private OutputStream os;
    
    public VCodeGenerator(OutputStream os)
    {
        this.os = os;
    }
    
    public VCodeGenerator(OutputStream os, int width, int height, int charCnt)
    {
        this.os = os;
        this.width = width;
        this.height = height;
        this.charCnt = charCnt;
    }
    
    public void drawCode()
    {
        
    }
}
