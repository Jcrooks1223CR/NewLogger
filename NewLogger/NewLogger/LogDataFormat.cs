using System.Globalization;
using System.Text.Json.Nodes;
using System.Text.Json.Serialization;
using System.Reflection.Emit;
using static System.Net.WebRequestMethods;
using System.Diagnostics;
using System.Reflection.Metadata;
using System.Reflection.PortableExecutable;
using System.Collections.Generic;
using System.Runtime;
using System.IO;
using System;
using System.Security.Cryptography.X509Certificates;
using File = System.IO.File;
using System.Net.Http.Json;
using System.Xml;
using System.Text.RegularExpressions;
using System.Text;
using System.Linq;
using System.Web;
using System.Net;


namespace NewLogger;

public class LogDataFormat
{
    public static void Main(string[] args)
    {
        string logData = File.ReadAllText(@".\logData.json");
        string logConfig = File.ReadAllText(@".\logconfig.json");
        string logMessage = "This is a newer test log message.\n";
        Console.WriteLine(logData);

        Console.WriteLine();
        void ToConsole(string logData)
        {
            if (string.IsNullOrEmpty(logMessage))
            {
                // write logger error to default logger file
                Environment.Exit(0);
            }
            Console.WriteLine(logData);
        }

        void ToFile(string logData)
        {
            if (string.IsNullOrEmpty(logData))
            {
                // write logger error to default logger file
                Environment.Exit(0);
            }
            else
            {
                Console.WriteLine(logData);
            }
        }
    }
}