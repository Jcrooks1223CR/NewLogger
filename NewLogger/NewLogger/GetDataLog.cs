using System.Globalization;
using System.Text.Json.Nodes;
using System.Text.Json.Serialization;
using System.Reflection.Emit;
using static System.Net.WebRequestMethods;
using System.Diagnostics;
using System.Reflection.Metadata;
using System.Reflection.PortableExecutable;
using System.Xml.Linq;
using System.Collections.Generic;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace NewLogger;

public class GetLogData
{
    public string timeStamp { get; set; }
    public string host { get; set; }
    public string source { get; set; }
    public string correlationId { get; set; }
    public string code { get; set; }

    public string message { get; set; }

    public string http { get; set; }

    public string trace { get; set; }

    public List<string> data { get; set; }

    
    public DateTime GetTimeStamp(DateTime timeStamp)
    {
        return timeStamp;
    }
    public void SetTimeStamp(DateTime timeStamp)
    {
        this.timeStamp = "[{ \"timestamp\"}]";
        //Function set varable to JSON element
    }
    public string GetHost(string host)
    {
        return host;
    }
    public void SetHost(string host)
    {
        this.host = "[{ \"host\"}]";
        // Function set varable to JSON element
    }
    public string GetSource(string source)
    {
        return source;
    }
    public void SetSource(string host)
    {
        this.source = source;
    }

    public string GetCorrelationId(string correlationId)
    {
        return correlationId;
    }
    public void SetCorrelationId(string correlationId)
    {
        this.correlationId = correlationId;
    }

    public string GetCode(string code)
    {
        return code;
    }
    public void SetCode(string code)
    {
        this.code = code;
    }
    public string GetMessage(string message)
    {
        return code;
    }
    public void SetMessage(string message)
    {
        this.code = code;
    }
    public string GetHttp(string http)
    {
        return http;
    }
    public void SetHttp(string http)
    {
        this.http = http;
    }
    public string GetTrace(string trace)
    {
        return trace;
    }
    public void SetTrace(string trace)
    {
        this.trace = trace;
    }
    public string GetData(string data)
    {
        return data;
    }
    public void SetData(List<string> data)
    {
        this.data = data;
    }
}









}