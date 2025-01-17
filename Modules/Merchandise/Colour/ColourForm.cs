﻿using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Indotalent.Merchandise.Forms
{
    [FormScript("Merchandise.Colour")]
    [BasedOnRow(typeof(ColourRow), CheckNames = true)]
    public class ColourForm
    {
        [Tab("General")]
        [Category("Size for Variant")]
        public String Name { get; set; }
        [TextAreaEditor(Rows = 3)]
        public String Description { get; set; }
    }
}