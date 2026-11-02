using System.Windows;
using System.Windows.Input;

namespace AluCraft.Windows;

public partial class ScriptDialogWindow : Window
{
    public string ResponseText => ResponseInput.Text;

    public ScriptDialogWindow(string heading, string message, bool showInput, string defaultText, bool showCancel)
    {
        InitializeComponent();
        HeadingText.Text = heading;
        MessageText.Text = message;
        ResponseInput.Text = defaultText;
        ResponseInput.Visibility = showInput ? Visibility.Visible : Visibility.Collapsed;
        CancelButton.Visibility = showCancel ? Visibility.Visible : Visibility.Collapsed;
        AcceptButton.Content = showCancel ? "Continue" : "OK";
        Loaded += (_, _) =>
        {
            if (showInput)
            {
                ResponseInput.Focus();
                ResponseInput.SelectAll();
            }
            else
            {
                AcceptButton.Focus();
            }
        };
    }

    private void Accept_Click(object sender, RoutedEventArgs e)
    {
        DialogResult = true;
    }

    private void Cancel_Click(object sender, RoutedEventArgs e)
    {
        DialogResult = false;
    }

    private void Dialog_KeyDown(object sender, KeyEventArgs e)
    {
        if (e.Key == Key.Escape && CancelButton.Visibility == Visibility.Visible)
        {
            DialogResult = false;
            e.Handled = true;
        }
    }
}
