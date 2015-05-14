using System.Web;
using System.Web.Mvc;

namespace AngularHtml5RoutingInAspNet
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}