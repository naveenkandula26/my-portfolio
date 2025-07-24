#!/usr/bin/perl

use strict;
use warnings;
use JSON;
use File::Path qw(make_path);
use File::Spec;

# Script to extract files from file-management-app.json into the correct folder structure

# Check if the JSON file exists
my $json_file = "file-management-app.json";
unless (-f $json_file) {
    die "Error: $json_file not found in the current directory.\n";
    }

    # Read and parse the JSON file
    open my $fh, '<', $json_file or die "Error: Cannot open $json_file: $!\n";
    my $json_text = do { local $/; <$fh> };
    close $fh;

    my $data;
    eval {
        $data = decode_json($json_text);
	};
	if ($@) {
	    die "Error: Failed to parse JSON: $@\n";
	    }

	    # Ensure the JSON has the expected structure
	    unless (exists $data->{files} && ref $data->{files} eq 'HASH') {
	        die "Error: Invalid JSON structure. Expected 'files' key with a hash.\n";
		}

		# Iterate over the files in the JSON
		while (my ($file_path, $content) = each %{$data->{files}}) {
		    # Get the directory path
		        my ($volume, $dir, $file) = File::Spec->splitpath($file_path);
			    my $dir_path = $dir ? File::Spec->catdir(File::Spec->splitdir($dir)) : '.';

			        # Create the directory structure if it doesn't exist
				    if ($dir_path ne '.') {
				            make_path($dir_path, { verbose => 1, mode => 0755 }) unless -d $dir_path;
					        }

						    # Write the content to the file
						        open my $out_fh, '>', $file_path or die "Error: Cannot write to $file_path: $!\n";
							    print $out_fh $content;
							        close $out_fh;

								    print "Created: $file_path\n";
								    }

								    print "All files have been extracted successfully.\n";
								    
