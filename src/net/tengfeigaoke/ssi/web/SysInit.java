package net.tengfeigaoke.ssi.web;

import javax.servlet.ServletContext;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

public class SysInit implements ServletContextListener
{
    
    public void contextDestroyed(ServletContextEvent arg0)
    {
        
    }
    
    @Override
    public void contextInitialized(ServletContextEvent event)
    {
        ServletContext context = event.getServletContext();
        String sysname = context.getInitParameter("sysname");
        context.setAttribute("sysname", sysname);
    }
    
}
