using System.Reflection.Metadata;
using System.Reflection.PortableExecutable;
using System.Xml.Linq;
using System.Collections.Generic;
using System.Runtime;
using System.IO;
using System;
using System.Security.Cryptography.X509Certificates;
using File = System.IO.File;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace NewLogger;

public class DataLogger
{
    public static void Main(string[] args)
    {
        //declare instances 
        GetLogData getLogData = new GetLogData();
        LogDataFormat logDataFormat = new LogDataFormat();
        LogDataTransport logDataTransport = new LogDataTransport();

        //created variables for JSON file
        string logConfig = File.ReadAllText(@".\logconfig.json");
        string logData = File.ReadAllText(@".\logData.json");

        // Function should call element from JSON
       // getLogData.GetHost(logData));



        void Log(string logConfig, string logData)
        {
            Console.WriteLine("Entering log Method");
            if(!string.IsNullOrEmpty(logData))
            {
                Console.WriteLine("exiting log method - missing level and/or data");
                Environment.Exit(0);
                // write write bad request error to logger error log file
            }
            else
            {

            }
        }

        /* switch ()
         {
             case "error":
                 return 0;
             case "warn":
                 return 1;
             case "info":
                 return 2;
             case "http":
                 return 3;
             case "verbose":
                 return 4;
             case "debug":
                 return 5;
             default:
                 return 2;
         }*/


    }
}